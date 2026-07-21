# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndToEEndTestCase.spec.ts >> execute end-to-end test flow @end-to-end
- Location: tests\EndToEEndTestCase.spec.ts:30:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - button "$ Currency " [ref=e7] [cursor=pointer]:
        - strong [ref=e8]: $
        - text: Currency
        - generic [ref=e9]: 
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "" [ref=e13] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=information/contact
            - generic [ref=e14]: 
          - text: "123456789"
        - listitem [ref=e15]:
          - link " My Account" [ref=e16] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/account
            - generic [ref=e17]: 
            - text: My Account
        - listitem [ref=e19]:
          - link " Wish List (0)" [ref=e20] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/wishlist
            - generic [ref=e21]: 
            - text: Wish List (0)
        - listitem [ref=e22]:
          - link " Shopping Cart" [ref=e23] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/cart
            - generic [ref=e24]: 
            - text: Shopping Cart
        - listitem [ref=e25]:
          - link " Checkout" [ref=e26] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/checkout
            - generic [ref=e27]: 
            - text: Checkout
  - banner [ref=e28]:
    - generic [ref=e30]:
      - link "Your Store" [ref=e33] [cursor=pointer]:
        - /url: http://localhost/opencart/upload/index.php?route=common/home
        - img "Your Store" [ref=e34]
      - generic [ref=e36]:
        - textbox "Search" [active] [ref=e37]: MacBook
        - button "" [ref=e39] [cursor=pointer]:
          - generic [ref=e40]: 
      - button " 0 item(s) - $0.00" [ref=e43] [cursor=pointer]:
        - generic [ref=e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=e46]:
    - generic: 
    - list [ref=e48]:
      - listitem [ref=e49]:
        - link "Desktops" [ref=e50] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=20
      - listitem [ref=e51]:
        - link "Laptops & Notebooks" [ref=e52] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=18
      - listitem [ref=e53]:
        - link "Components" [ref=e54] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=25
      - listitem [ref=e55]:
        - link "Tablets" [ref=e56] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=57
      - listitem [ref=e57]:
        - link "Software" [ref=e58] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=17
      - listitem [ref=e59]:
        - link "Phones & PDAs" [ref=e60] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=24
      - listitem [ref=e61]:
        - link "Cameras" [ref=e62] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=33
      - listitem [ref=e63]:
        - link "MP3 Players" [ref=e64] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=product/category&path=34
  - generic [ref=e65]:
    - list [ref=e66]:
      - listitem [ref=e67]:
        - link "" [ref=e68] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=common/home
          - generic [ref=e69]: 
      - listitem [ref=e70]:
        - link "Account" [ref=e71] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/index.php?route=account/account
    - generic [ref=e72]:
      - generic [ref=e73]:
        - heading "My Account" [level=2] [ref=e74]
        - list [ref=e75]:
          - listitem [ref=e76]:
            - link "Edit your account information" [ref=e77] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/edit
          - listitem [ref=e78]:
            - link "Change your password" [ref=e79] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/password
          - listitem [ref=e80]:
            - link "Modify your address book entries" [ref=e81] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/address
          - listitem [ref=e82]:
            - link "Modify your wish list" [ref=e83] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/wishlist
        - heading "My Orders" [level=2] [ref=e84]
        - list [ref=e85]:
          - listitem [ref=e86]:
            - link "View your order history" [ref=e87] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/order
          - listitem [ref=e88]:
            - link "Downloads" [ref=e89] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/download
          - listitem [ref=e90]:
            - link "Your Reward Points" [ref=e91] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/reward
          - listitem [ref=e92]:
            - link "View your return requests" [ref=e93] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/return
          - listitem [ref=e94]:
            - link "Your Transactions" [ref=e95] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/transaction
          - listitem [ref=e96]:
            - link "Recurring payments" [ref=e97] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/recurring
        - heading "My Affiliate Account" [level=2] [ref=e98]
        - list [ref=e99]:
          - listitem [ref=e100]:
            - link "Register for an affiliate account" [ref=e101] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/affiliate/add
        - heading "Newsletter" [level=2] [ref=e102]
        - list [ref=e103]:
          - listitem [ref=e104]:
            - link "Subscribe / unsubscribe to newsletter" [ref=e105] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/newsletter
      - complementary [ref=e106]:
        - generic [ref=e107]:
          - link "My Account" [ref=e108] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/account
          - link "Edit Account" [ref=e109] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/edit
          - link "Password" [ref=e110] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/password
          - link "Address Book" [ref=e111] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/address
          - link "Wish List" [ref=e112] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/wishlist
          - link "Order History" [ref=e113] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/order
          - link "Downloads" [ref=e114] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/download
          - link "Recurring payments" [ref=e115] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/recurring
          - link "Reward Points" [ref=e116] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/reward
          - link "Returns" [ref=e117] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/return
          - link "Transactions" [ref=e118] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/transaction
          - link "Newsletter" [ref=e119] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/newsletter
          - link "Logout" [ref=e120] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/logout
  - contentinfo [ref=e121]:
    - generic [ref=e122]:
      - generic [ref=e123]:
        - generic [ref=e124]:
          - heading "Information" [level=5] [ref=e125]
          - list [ref=e126]:
            - listitem [ref=e127]:
              - link "About Us" [ref=e128] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=4
            - listitem [ref=e129]:
              - link "Delivery Information" [ref=e130] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=6
            - listitem [ref=e131]:
              - link "Privacy Policy" [ref=e132] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=3
            - listitem [ref=e133]:
              - link "Terms & Conditions" [ref=e134] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&information_id=5
        - generic [ref=e135]:
          - heading "Customer Service" [level=5] [ref=e136]
          - list [ref=e137]:
            - listitem [ref=e138]:
              - link "Contact Us" [ref=e139] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/contact
            - listitem [ref=e140]:
              - link "Returns" [ref=e141] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/return/add
            - listitem [ref=e142]:
              - link "Site Map" [ref=e143] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/sitemap
        - generic [ref=e144]:
          - heading "Extras" [level=5] [ref=e145]
          - list [ref=e146]:
            - listitem [ref=e147]:
              - link "Brands" [ref=e148] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/manufacturer
            - listitem [ref=e149]:
              - link "Gift Certificates" [ref=e150] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/voucher
            - listitem [ref=e151]:
              - link "Affiliate" [ref=e152] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=affiliate/login
            - listitem [ref=e153]:
              - link "Specials" [ref=e154] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/special
        - generic [ref=e155]:
          - heading "My Account" [level=5] [ref=e156]
          - list [ref=e157]:
            - listitem [ref=e158]:
              - link "My Account" [ref=e159] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/account
            - listitem [ref=e160]:
              - link "Order History" [ref=e161] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/order
            - listitem [ref=e162]:
              - link "Wish List" [ref=e163] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/wishlist
            - listitem [ref=e164]:
              - link "Newsletter" [ref=e165] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/newsletter
      - separator [ref=e166]
      - paragraph [ref=e167]:
        - text: Powered By
        - link "OpenCart" [ref=e168] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Your Store © 2026
```

# Test source

```ts
  37  |     let registeredEmail: string = await performRegistration(page);
  38  |     console.log("✅ Registration is completed!");
  39  | 
  40  |     // Step 2: Logout after successful registration
  41  |     await performLogout(page);
  42  |     console.log("✅ Logout is completed!");
  43  | 
  44  |     // Step 3: Login with the registered email
  45  |     await performLogin(page, registeredEmail);
  46  |     console.log("✅ Login is completed!");
  47  | 
  48  |     // Step 4: Search for a product and add it to the cart
  49  |     await addProductToCart(page);
  50  |     console.log("✅ Product added to cart!");
  51  | 
  52  |     // Step 5: Verify the contents of the shopping cart
  53  |     await verifyShoppingCart(page);
  54  |     console.log("✅ Shopping cart verification completed!");
  55  | 
  56  |     // Step 6: Perform checkout (skipped for demo site)
  57  |     // await performCheckout(page);
  58  | });
  59  | 
  60  | 
  61  | // Function to register a new user account
  62  | async function performRegistration(page: Page): Promise<string> {
  63  |     const homePage = new HomePage(page);
  64  |     await homePage.clickMyAccount();       // Click "My Account" link
  65  |     await homePage.clickRegister();        // Click "Register" option
  66  | 
  67  |     const registrationPage = new RegistrationPage(page);
  68  | 
  69  |     // Fill in random user details
  70  |     await registrationPage.setFirstName(RandomDataUtil.getFirstName());
  71  |     await registrationPage.setLastName(RandomDataUtil.getlastName());
  72  | 
  73  |     let email: string = RandomDataUtil.getEmail();
  74  |     await registrationPage.setEmail(email);
  75  |     await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());
  76  | 
  77  |     await registrationPage.setPassword("test123");
  78  |     await registrationPage.setConfirmPassword("test123");
  79  | 
  80  |     await registrationPage.setPrivacyPolicy();  // Accept the privacy policy
  81  |     await registrationPage.clickContinue();     // Submit the registration form
  82  | 
  83  |     // Validate that the registration was successful
  84  |     const confirmationMsg = await registrationPage.getConfirmationMsg();
  85  |     expect(confirmationMsg).toContain('Your Account Has Been Created!');
  86  | 
  87  |     return email; // Return the email for later use in login
  88  | }
  89  | 
  90  | 
  91  | // Function to log out the current user
  92  | async function performLogout(page: Page) {
  93  |     const myAccountPage = new MyAccountPage(page);
  94  |     const logoutPage: LogoutPage = await myAccountPage.clickLogout();
  95  | 
  96  |     // Ensure the "Continue" button is visible
  97  |     expect(await logoutPage.isContinueButtonVisible()).toBe(true);
  98  | 
  99  |     // Click "Continue" and verify redirection to HomePage
  100 |     const homePage = await logoutPage.clickContinue();
  101 |     expect(await homePage.isHomePageExits()).toBe(true);
  102 | }
  103 | 
  104 | 
  105 | // Function to log in using the registered email
  106 | async function performLogin(page: Page, email: string) {
  107 |     const config = new TestConfig();
  108 |     await page.goto(config.appUrl);  // Reload home page
  109 | 
  110 |     const homePage = new HomePage(page);
  111 |     await homePage.clickMyAccount();
  112 |     await homePage.clickLogin();
  113 | 
  114 |     const loginPage = new LoginPage(page);
  115 |     await loginPage.login(email, "test123");  // Use the registered credentials
  116 | 
  117 |     // Verify login by checking My Account page
  118 |     const myAccountPage = new MyAccountPage(page);
  119 |     expect(await myAccountPage.isMyAccountPageExists()).toBeTruthy();
  120 | }
  121 | 
  122 | 
  123 | // Function to search for a product and add it to cart
  124 | async function addProductToCart(page: Page) {
  125 |     const homePage = new HomePage(page);
  126 | 
  127 |     const config = new TestConfig();
  128 |     const productName: string = config.productName;
  129 |     const productQuantity: string = config.productQulaity;
  130 | 
  131 |     await homePage.enterProductName(productName);
  132 |     await homePage.clickSearch();  // Click on search button
  133 | 
  134 |     const searchResultsPage = new SearchResultsPage(page);
  135 | 
  136 |     // Validate search results page
> 137 |     expect(await searchResultsPage.isSearchResultsPageExists()).toBeTruthy();
      |                                                                 ^ Error: expect(received).toBeTruthy()
  138 | 
  139 |     // Validate that the desired product exists in the results
  140 |     expect(await searchResultsPage.isProductExist(productName)).toBeTruthy();
  141 | 
  142 |     // Select product and set quantity
  143 |     const productPage = await searchResultsPage.selectProduct(productName);
  144 |     await productPage?.setQuantity(productQuantity);
  145 |     await productPage?.addToCart();  // Add product to shopping cart
  146 | 
  147 |     await page.waitForTimeout(3000); // Wait to simulate user delay
  148 | 
  149 |     // Confirm product was added
  150 |     expect(await productPage?.isConfirmationMessageVisible()).toBe(true);
  151 | }
  152 | 
  153 | 
  154 | // Function to verify the shopping cart details
  155 | async function verifyShoppingCart(page: Page) {
  156 |     const productPage = new ProductPage(page);
  157 | 
  158 |     // Navigate to shopping cart from product page
  159 |     await productPage.clickItemsToNavigateToCart();
  160 |     const shoppingCartPage: ShoppingCartPage = await productPage.clickViewCart();
  161 | 
  162 |     console.log("🛒 Navigated to shopping cart!");
  163 | 
  164 |     const config = new TestConfig();
  165 |     
  166 |     // Validate that total price is correct (based on config)
  167 |     expect(await shoppingCartPage.getTotalPrice()).toBe(config.totalPrice);
  168 | }
  169 | 
  170 | 
  171 | // Function to perform checkout (disabled for demo site)
  172 | async function performCheckout(page: Page) {
  173 |     // Checkout feature is not implemented since it's a demo site.
  174 |     // Place your checkout flow logic here if backend is available.
  175 | }
  176 | 
```