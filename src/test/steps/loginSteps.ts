import {Given,When, Then,Before} from '@cucumber/cucumber'
import {Page,chromium,Browser, expect} from '@playwright/test'
let page:Page,
browser:Browser

Before(async () => {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage(); 
});

Given('User navigates to the application', async function () {

  await page.goto('https://practicetestautomation.com/practice-test-login/')
  });

  Given('User click on the login link', async function () {
    await page.locator('#submit').click();
    
  });

  Given('User enter the username as {string}', async function (username) {
    await page.locator('#username').fill(username)
  
  });

  Given('User enter the password as {string}', async function (password) {
    await page.locator('#password').fill(password)
    
  });

  When('User click on the login button', async function () {
    await page.getByRole('button',{name:'Submit'}).click();
  });

  Then('Login should be success', async function () {
    const successText=await page.locator('strong').first().textContent();
    console.log(successText);
    await page.close();
  });

  // Given('User click on the login link', async function () {
    
  // });

  // Given('User enter the username as {string}', async function (string) {
  // });

  // Given('User enter the password as {string}', async function (string) {

  // });

  // When('User click on the login button', async function () {
  // });

  When('Login should fail', async function () {
    const failureMessage=await page.locator('#error') ;
    await expect(failureMessage).toBeVisible();
    await page.close();

  });  