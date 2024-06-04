import { Page } from 'playwright';
import {Project} from "../api/models/Project";

abstract class BasePage {
    protected page: Page;

    protected constructor(page: Page) {
        this.page = page;
    }

    async open(project?: Project) {
        return this;
    }

    abstract getUrl(): string;

    async loginFromUI(authToken: string): Promise<void> {
        await this.page.evaluate(token => localStorage.setItem('auth_token', token), authToken)
    }
}

export { BasePage };