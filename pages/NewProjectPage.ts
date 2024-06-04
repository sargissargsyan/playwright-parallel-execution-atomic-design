import { Page } from "@playwright/test";
import {BasePage} from "./BasePage";

class NewProjectPage extends BasePage {

    page: Page;
    private  navProjectBarSelector = '[tg-nav="create-project-scrum"]'
    private  loadSelector = 'load'
    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    async openPage(): Promise<NewProjectPage> {
        await this.open();
        return new NewProjectPage(this.page);
    }

    getUrl(): string {
        return '/project/new';
    }

    async selectScrum(): Promise<NewScrumProjectPage> {
        await this.page.waitForSelector(this.navProjectBarSelector);
        await this.page.click(this.navProjectBarSelector);
        await this.page.waitForSelector(this.loadSelector);
        return new NewScrumProjectPage(this.page);
    }
}

class NewScrumProjectPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }
}

export { NewProjectPage, NewScrumProjectPage };