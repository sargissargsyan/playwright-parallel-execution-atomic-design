import { User } from '../api/models/User';
import { TestUtils } from '../utils/TestUtils';
import {BaseService, RegisterData} from '../api/BaseService';
import { test, expect } from '@playwright/test';
import {Project} from "../api/models/Project";
import {ProjectService} from "../api/ProjectService";
import {ProjectPage} from "../pages/ProjectPage";
import {BrowserUtils} from "../utils/BrowserUtils";

test.describe('Project details page', () => {
    let name: string;
    let username: string;
    let email: string;
    const password = 'Armenia2023';
    let user: User;
    let project: Project;

    test.beforeEach(async ({ page }) => {
        name = TestUtils.randomString(5);
        username = TestUtils.randomString(7);
        email = TestUtils.randomEmail(username);
        let registerData: RegisterData = {
            email: email,
            full_name: name,
            password: password,
            type: 'public',
            username: username,
            accepted_terms: true
        };
        project = {
            name: TestUtils.randomString(10),
            description: TestUtils.randomString(20)
        }
        user = await BaseService.register(registerData);
        project = await ProjectService.createProject(project, user.auth_token);
    });

    test('should have correct project name', async ({ page }) => {
        await BrowserUtils.login(page, user);
        const projectPage = await new ProjectPage(page, project).openPage();
        const projectName = await projectPage.getProjectName();

        await expect(projectName).toContainText(project.name)
    });


    test('should have correct action buttons', async ({ page }) => {
        await BrowserUtils.login(page, user);
        const projectPage = await new ProjectPage(page, project).openPage();
        const likeBtn = await projectPage.getLikeBtn();

        await expect(likeBtn).toBeVisible();
    });


});