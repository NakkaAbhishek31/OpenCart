# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddToCart.spec.ts >> Add product to cart test @master @regression
- Location: tests\AddToCart.spec.ts:44:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost/opencart/upload
Call log:
  - navigating to "http://localhost/opencart/upload", waiting until "load"

```

# Test source

```ts
  1  | /**
  2  |  * Test Case: Add Product to Cart
  3  |  * 
  4  |  * Tags: @master @regression
  5  |  * 
  6  |  * Steps:
  7  |  * 1. Navigate to application URL
  8  |  * 2. Enter an existing product name in the search box
  9  |  * 3. Click the search button
  10 |  * 4. Verify the product appears in the search results
  11 |  * 5. Select the product
  12 |  * 6. Set quantity
  13 |  * 7. Add the product to the cart
  14 |  * 8. Verify the success message
  15 |  */
  16 | 
  17 | import { test, expect } from '@playwright/test';
  18 | import { TestConfig } from '../test.config';
  19 | import { HomePage } from '../pages/HomePage';
  20 | 
  21 | import { ProductPage } from '../pages/ProductPage';
  22 | import { SearchResultsPage } from '../pages/SearchPage';
  23 | 
  24 | // Shared instances
  25 | let config: TestConfig;
  26 | let homePage: HomePage;
  27 | let searchResultsPage: SearchResultsPage;
  28 | let productPage: ProductPage;
  29 | 
  30 | test.beforeEach(async ({ page }) => {
  31 |   config = new TestConfig(); // Load test configuration
> 32 |   await page.goto(config.appUrl); // Step 1: Open application URL
     |              ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost/opencart/upload
  33 | 
  34 |   // Initialize page objects
  35 |   homePage = new HomePage(page);
  36 |   searchResultsPage = new SearchResultsPage(page);
  37 |   productPage=new ProductPage(page);
  38 | });
  39 | 
  40 | test.afterEach(async ({ page }) => {
  41 |   await page.close(); // Optional cleanup
  42 | });
  43 | 
  44 | test('Add product to cart test @master @regression', async ({ page }) => {
  45 |   // Step 2: Enter product name in search box
  46 |   await homePage.enterProductName(config.productName);
  47 | 
  48 |   // Step 3: Click the search button
  49 |   await homePage.clickSearch();
  50 | 
  51 |   // Step 4: Verify search results page is displayed
  52 |   expect(await searchResultsPage.isSearchResultsPageExists()).toBeTruthy();
  53 | 
  54 |   // Step 5: Verify that the product exists in the results
  55 |   const productName = config.productName;
  56 |   expect(await searchResultsPage.isProductExist(productName)).toBeTruthy();
  57 | 
  58 |   // Step 6-7-8: Select product → Set quantity → Add to cart → Verify confirmation
  59 |   if (await searchResultsPage.isProductExist(productName)) {
  60 |     //productPage = await searchResultsPage.selectProduct(productName);
  61 |     await searchResultsPage.selectProduct(productName);
  62 |     await productPage.setQuantity(config.productQulaity); // Set quantity
  63 |     await productPage.addToCart();                         // Add to cart
  64 | 
  65 |     // Step 8: Assert success message is visible
  66 |     expect(await productPage.isConfirmationMessageVisible()).toBeTruthy();
  67 |   }
  68 | });
  69 | 
```