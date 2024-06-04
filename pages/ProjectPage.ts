import { BasePage } from './BasePage';
import {Locator, Page} from "@playwright/test";
import {Project} from "../api/models/Project";

export class ProjectPage extends BasePage {
    private project: Project;
    private projectNameSelector: string = '.intro-title .project-name';
    private likeBtnSelector: string = 'tg-like-project-button';


    constructor(page: Page, project?: Project) {
        super(page);
        this.project = project;
    }

    getUrl(): string {
        return '/project/' + this.project.slug;
    }
    async openPage(project?: Project): Promise<ProjectPage> {
        await this.page.goto(this.getUrl());
        return new ProjectPage(this.page);
    }

    async getProjectName(): Promise<Locator> {
        return this.page.locator(this.projectNameSelector);
    }

    async getLikeBtn(): Promise<Locator> {
        return this.page.locator(this.likeBtnSelector);
    }
}