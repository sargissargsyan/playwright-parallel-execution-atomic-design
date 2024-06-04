import {Page} from "@playwright/test";
import {User} from "../api/models/User";

export class BrowserUtils {
    static async login(page: Page, user: User): Promise<void> {
        await page.goto(process.env.BASE_URL);
        await page.evaluate(token => localStorage.setItem('token', token), `"${user.auth_token}"`);
        await page.evaluate(userInfo => localStorage.setItem('userInfo', userInfo), JSON.stringify(user));
        await page.context().storageState({ path: 'playwright/.auth/user.json' })
    }
}