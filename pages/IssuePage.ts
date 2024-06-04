import {Page} from 'playwright';
import {BasePage} from './basePage';
import {Issue} from '../api/models/issue';
import {Locator} from "@playwright/test";

class IssuePage extends BasePage {
    page: Page
    private issue: Issue;
    private issueStatusSelector: string = '.detail-status-inner';
    private assigneeSelector: string = '.user-list-single';
    private createdBySelector: string = '.created-title';

    constructor(page: Page, issue?: Issue) {
        super(page);
        this.page = page;
        this.issue = issue;
    }

    async openPage(): Promise<IssuePage> {
        await this.page.goto(this.getUrl());
        return new IssuePage(this.page);
    }

    getUrl(): string {
        return `/project/${this.issue.project_extra_info.slug}/issue/${this.issue.ref}`;
    }

    async getIssueInnerStatus(): Promise<Locator> {
        return this.page.locator(this.issueStatusSelector);
    }

    async getIssueAssignee(): Promise<Locator> {
        return this.page.locator(this.assigneeSelector);
    }

    async getCreatedBy(): Promise<Locator> {
        return this.page.locator(this.createdBySelector);
    }

}

export {IssuePage};