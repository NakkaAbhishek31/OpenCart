# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginDataDrivin.spec.ts >> Login Test: Valid login @datadriven
- Location: tests\LoginDataDrivin.spec.ts:78:8

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost/opencart/upload
Call log:
  - navigating to "http://localhost/opencart/upload", waiting until "load"

```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { LoginPage } from '../pages/LoginPage';
  3   | import { TestConfig } from '../test.config';
  4   | import { HomePage } from '../pages/HomePage';
  5   | import { DataProvider } from '../Utilites/dataProvider';
  6   | import { MyAccountPage } from '../pages/MyAccountPge';
  7   | 
  8   | //Load JSON test data logindata.json
  9   | 
  10  | const jsonPath="testdata/logindata.json";
  11  | const jsonTestData=DataProvider.getTestDataFromJson(jsonPath);
  12  | 
  13  | 
  14  | for(const data of jsonTestData)
  15  | {
  16  |    test(`Login Test with JSON Data: ${data.testName} @datadriven`, async({page})=>{
  17  | 
  18  |         const config = new TestConfig(); // create instance
  19  |         await page.goto(config.appUrl);    // getting appURL from test.config.ts file
  20  | 
  21  |         const homePage = new HomePage(page);
  22  |         await homePage.clickMyAccount();
  23  |         await homePage.clickLogin();
  24  | 
  25  |         const loginPage = new LoginPage(page);
  26  |         await loginPage.login(data.email, data.password);
  27  | 
  28  |         if(data.expected.toLowerCase()==='success')
  29  |         {
  30  |             const myAccountPage=new MyAccountPage(page);
  31  |             const isLoggedIn=await myAccountPage.isMyAccountPageExists();
  32  |             expect(isLoggedIn).toBeTruthy();
  33  | 
  34  |         }
  35  |         else{
  36  |             const errorMessage=await loginPage.getloginErrorMessage();
  37  |             //expect(errorMessage).toBe('Warning: No match for E-Mail Address and/or Password.');
  38  |             expect(errorMessage).toContain('Warning: No match');
  39  |         }
  40  |     })
  41  | 
  42  | }
  43  | 
  44  | 
  45  | 
  46  | //Load CSV test data logindata.json
  47  | 
  48  | const csvPath = "testdata/logindata.csv";
  49  | const csvTestData = DataProvider.getTestDataFromCsv(csvPath);
  50  | 
  51  | // for (const data of csvTestData) {
  52  | //   test(`Login Test: ${data.testName} @datadriven`, async ({ page }) => {
  53  | //     const config = new TestConfig();
  54  | //     await page.goto(config.appUrl);
  55  | 
  56  | //     const homePage = new HomePage(page);
  57  | //     await homePage.clickMyAccount();
  58  | //     await homePage.clickLogin();
  59  | 
  60  | //     const loginPage = new LoginPage(page);
  61  | //     await loginPage.login(data.email, data.password);
  62  | 
  63  | //     if (data.expected.toLowerCase() === "success") {
  64  | //       const myAccountPage = new MyAccountPage(page);
  65  | //       expect(await myAccountPage.isMyAccountPageExists()).toBeTruthy();
  66  | //     } else {
  67  | //       const errorMessage = await loginPage.getloginErrorMessage();
  68  | //       expect(errorMessage).toContain("Warning: No match");
  69  | //     }
  70  | //   });
  71  | 
  72  | 
  73  | 
  74  | 
  75  | 
  76  | for(const data of csvTestData)
  77  | {
  78  |    test(`Login Test: ${data.testName} @datadriven`, async({page})=>{
  79  | 
  80  |         const config = new TestConfig(); // create instance
> 81  |         await page.goto(config.appUrl);    // getting appURL from test.config.ts file
      |                    ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost/opencart/upload
  82  | 
  83  |         const homePage = new HomePage(page);
  84  |         await homePage.clickMyAccount();
  85  |         await homePage.clickLogin();
  86  | 
  87  |         const loginPage = new LoginPage(page);
  88  |         await loginPage.login(data.email, data.password);
  89  | 
  90  |         if(data.expected.toLowerCase()==='success')
  91  |         {
  92  |             const myAccountPage=new MyAccountPage(page);
  93  |             const isLoggedIn=await myAccountPage.isMyAccountPageExists();
  94  |             expect(isLoggedIn).toBeTruthy();
  95  | 
  96  |         }
  97  |         else{
  98  |             const errorMessage=await loginPage.getloginErrorMessage();
  99  |             //expect(errorMessage).toBe('Warning: No match for E-Mail Address and/or Password.');
  100 |             expect(errorMessage).toContain('Warning: No match');
  101 |         }
  102 |     })
  103 | 
  104 | }
```