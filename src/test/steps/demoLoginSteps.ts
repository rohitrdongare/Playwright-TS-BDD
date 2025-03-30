import { When, Then, Before} from '@cucumber/cucumber'
import {chromium, Page, Browser,expect} from '@playwright/test'


let page:Page
let browser:Browser
Before(async()=>{
    browser=await chromium.launch({headless:false});
    const context=await browser.newContext();
    page=await context.newPage();
})





When('User navigate to the application', async function () {
    await page.goto('https://www.saucedemo.com/');
  });

  When('user Enters the userName as {string}', async function (userName) {
    await page.getByPlaceholder('Username').fill(userName)
  }); 
  
  When('user Enters password  as {string}', async function (password) {
    await page.getByPlaceholder('Password').fill(password)
  });

  When('User click on Login Button', async function () {
    await page.locator('#login-button').click();
  });

  Then('Webpag should open', async function () {
    expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    console.log(page.url());
    await page.close()
  });


  Then('Error message should show', async function () {
    const errorText=await page.locator('h3[data-test="error"]').textContent();
    console.log(errorText)
    expect(errorText).toContain('do not match');
    await page.close();
  });

