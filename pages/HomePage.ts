import { Page } from 'playwright';
import { NewProjectPage } from './newProjectPage';
import {BasePage} from "./BasePage";
import {Locator} from "@playwright/test";

class HomePage extends BasePage {
    page: Page;
    private newProjectBtnSelector = '.master [tg-nav="create-project"]';
    private userAvatarSelector = '.user-avatar';


    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    async openPage(): Promise<HomePage> {
        await this.open();
        return new HomePage(this.page);
    }

    getUrl(): string {
        return '/';
    }

    async clickNewProject() {
        await this.page.click(this.newProjectBtnSelector);
        return new NewProjectPage(this.page);
    }

    async getNewProjectButton(): Promise<Locator> {
        return this.page.locator(this.newProjectBtnSelector);
    }

    async getUserAvatar(): Promise<Locator> {
        return this.page.locator(this.userAvatarSelector);
    }
}

export { HomePage };