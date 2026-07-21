# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> User login test @master @sanity @regression
- Location: tests\Login.spec.ts:39:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | /**
  2  |  * Test Case: Login with Valid Credentials
  3  |  * 
  4  |  * Tags: @master @sanity @regression
  5  |  * 
  6  |  * Steps:
  7  |  * 1) Navigate to the application URL
  8  |  * 2) Navigate to Login page via Home page
  9  |  * 3) Enter valid credentials and log in
  10 |  * 4) Verify successful login by checking 'My Account' page presence
  11 |  */
  12 | 
  13 | import { test, expect } from '@playwright/test';
  14 | import { HomePage } from '../pages/HomePage';
  15 | import { LoginPage } from '../pages/LoginPage';
  16 | import { TestConfig } from '../test.config';
  17 | import { MyAccountPage } from '../pages/MyAccountPge';
  18 | 
  19 | let config: TestConfig;
  20 | let homePage: HomePage;
  21 | let loginPage: LoginPage;
  22 | let myAccountPage: MyAccountPage;
  23 | 
  24 | 
  25 | test.beforeEach(async ({ page }) => {
  26 |   config = new TestConfig(); 
  27 |   await page.goto(config.appUrl); 
  28 |   homePage = new HomePage(page);
  29 |   loginPage = new LoginPage(page);
  30 |   myAccountPage = new MyAccountPage(page);
  31 | });
  32 | 
  33 | 
  34 | test.afterEach(async ({ page }) => {
  35 |   await page.close(); 
  36 | });
  37 | 
  38 | 
  39 | test('User login test @master @sanity @regression',async()=>{
  40 | 
  41 | 
  42 |     await homePage.clickMyAccount();
  43 |     await homePage.clickLogin();
  44 | 
  45 |     await loginPage.setEmail(config.email);
  46 |     await loginPage.setPassword(config.password);
  47 |     await loginPage.clickLogin();
  48 | 
  49 |    
  50 |     const isLoggedIn=await myAccountPage.isMyAccountPageExists();
> 51 |     expect(isLoggedIn).toBeTruthy();
     |                        ^ Error: expect(received).toBeTruthy()
  52 | 
  53 | })
  54 | 
```