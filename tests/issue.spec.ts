import { User } from '../api/models/User';
import { TestUtils } from '../utils/TestUtils';
import {BaseService, RegisterData} from '../api/BaseService';
import { test, expect } from '@playwright/test';
import {Project} from "../api/models/Project";
import {ProjectService} from "../api/ProjectService";
import {BrowserUtils} from "../utils/BrowserUtils";
import {Issue} from "../api/models/Issue";
import {IssueService} from "../api/IssueService";
import {IssuePage} from "../pages/IssuePage";

test.describe('Issue Details page', () => {
    let name: string;
    let username: string;
    let email: string;
    const password = 'SecretArmenia';
    let user: User;
    let project: Project;
    let issue: Issue;

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
        user = await BaseService.register(registerData);

        project = {
            name: TestUtils.randomString(10),
            description: TestUtils.randomString(20)
        }
        project = await ProjectService.createProject(project, user.auth_token);

        issue = {
            subject: TestUtils.randomString(10),
            project: project.id
        }
        issue = await IssueService.createIssue(issue, user.auth_token)
    });

    test('should have new status', async ({ page }) => {
        await BrowserUtils.login(page, user);
        const issuePage = await new IssuePage(page, issue).openPage();
        const status = await issuePage.getIssueInnerStatus();
        await expect(status).toContainText("New")
    });

    test('should have correct created by', async ({ page }) => {
        await BrowserUtils.login(page, user);
        const issuePage = await new IssuePage(page, issue).openPage();
        const createdBy = await issuePage.getCreatedBy();
        await expect(createdBy).toContainText(name)
    });

});