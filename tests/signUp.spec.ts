import endpoint from "./configTypes"
import { test, expect } from '@playwright/test'
var randomEmail = require('random-email');

function genString(length : number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

test("Signup successfully and able to sign", async ({ page }) => {

  // Go to the React Redux page
  await page.goto(endpoint.REACT_REDUX_URL);

  let username=genString(6)
  let password=genString(8)

  // Click sign up button
  await page.locator('#main > div > nav > div > ul > li:nth-child(3) > a').click()

  // Fill in needed information
  await page.fill('[placeholder="Username"]',username)
  await page.fill('[placeholder="Email"]',randomEmail({ domain: 'example.com' }))
  await page.fill('[placeholder="Password"]',password)
  // Hit sign in
  await page.locator('#main > div > div > div > div > div > form > fieldset > button').click()

  // Verify automatically navigate to homepage
  expect(await page.locator('#main > div > nav > div > ul > li:nth-child(4) > a').getAttribute('href')).toContain(username)
});