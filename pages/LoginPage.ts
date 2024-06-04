import { BasePage } from './BasePage';
import { HomePage } from './HomePage';
import {Locator, Page} from "@playwright/test";

export class LoginPage extends BasePage {
    private usernameSelector = '[name="username"]' ;
    private passwordSelector = '[name="password"]';
    private loginSelector = '.login-form button';
    private errorMessageLocator = '.notification-light.active';

    constructor(page: Page) {
        super(page);
    }
    getUrl(): string {
        return '/login';
    }
    async openPage(): Promise<LoginPage> {
        await this.page.goto(this.getUrl());
        return new LoginPage(this.page);
    }

    async login(username: string, password: string): Promise<HomePage> {
        await this.typeUsername(username);
        await this.typePassword(password);
        await this.clickLogin();
        return new HomePage(this.page);
    }

    async typeUsername(username: string): Promise<void> {
        await this.page.locator(this.usernameSelector).fill(username);
    }

    async typePassword(password: string): Promise<void> {
        await this.page.locator(this.passwordSelector).fill(password);
    }

    async clickLogin(): Promise<void> {
        await this.page.click(this.loginSelector);
    }

    async getErrorMessage(): Promise<Locator> {
        return this.page.locator(this.errorMessageLocator);
    }
}