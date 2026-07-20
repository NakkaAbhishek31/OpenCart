
import { HomePage } from "../pages/HomePage";
import { RegistrationPage } from "../pages/RegistrationPage";
import { TestConfig } from "../test.config";
import { RandomDataUtil } from "../Utilites/randomDataGenerator";
 import{test,expect} from "@playwright/test";


let homepage:HomePage;
let registrationpage:RegistrationPage;
let testconfig:TestConfig

test.beforeEach(async({page})=>{
testconfig=  new TestConfig();
homepage =new HomePage(page);
registrationpage=new RegistrationPage(page);
 await page.goto(testconfig.appUrl);
})

test.afterEach(async({page})=>{
await page.close();

});


 test('User Registraition test @master @sanity @regression ',async({page})=>{

  const testconfig=  new TestConfig();
  const homepage =new HomePage(page);
  
 await page.goto(testconfig.appUrl);
 await homepage.clickMyAccount();
 await homepage.clickRegister();
 
 await registrationpage.setFirstName(RandomDataUtil.getFirstName());
await  registrationpage.setLastName(RandomDataUtil.getlastName());
 await registrationpage.setEmail(RandomDataUtil.getEmail());
 await registrationpage.setTelephone(RandomDataUtil.getPhoneNumber());
 const password =RandomDataUtil.getPassword();
 await registrationpage.setPassword(password);
 await registrationpage.setConfirmPassword(password);

 await registrationpage.setPrivacyPolicy();
 await registrationpage.clickContinue();

 const confirmationMsg =await registrationpage.getConfirmationMsg();
 expect(confirmationMsg).toContain('Your Account Has Been Created!')
 })