import { User } from '../api/models/User';
import { LoginPage } from '../pages/LoginPage';
import { TestUtils } from '../utils/TestUtils';
import {BaseService, RegisterData} from '../api/BaseService';
import { test, expect } from '@playwright/test';

test.describe('Login Tests', () => {
    let name: string;
    let username: string;
    let email: string;
    const password = 'Armenia2023';
    let newUser: User;

    test.beforeEach(async() => {
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
        newUser = await BaseService.register(registerData);
    });

    test('should now be able to login with invalid username and password', async ({ page }) => {
        const loginPage = await new LoginPage(page).openPage();
        await loginPage.typeUsername('qweqweqwe');
        await loginPage.typePassword('qwqwqwqw');
        await loginPage.clickLogin();
        const errorMessage = await loginPage.getErrorMessage();

        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toContainText("Oops, something went wrong...");
        await expect(errorMessage).toContainText("According to the Taiga, your username/email or password are incorrect.");

   });

    test('should be able to login via UI', async ({ page }) => {
        const loginPage = await new LoginPage(page).openPage();
        const homePage = await loginPage.login(email, password);
        const userAvatar = await homePage.getUserAvatar();
        const newProjectBth = await homePage.getNewProjectButton();

        await expect(userAvatar).toBeVisible();
        await expect(newProjectBth).toBeVisible();
    });
});