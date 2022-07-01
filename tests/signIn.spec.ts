import endpoint from "./configTypes"
import { test, expect } from '@playwright/test'
var randomEmail = require('random-email');


test("Sign in fail with wrong email or password", async ({ page }) => {

  // Go to the React Redux page
  await page.goto(endpoint.REACT_REDUX_URL);

  // Click sign in button
  await page.locator('#main > div > nav > div > ul > li:nth-child(2) > a').click()

  // Fill in needed information
  await page.fill('[placeholder="Email"]','wrongEmail@test.com')
  await page.fill('[placeholder="Password"]','wrongPassword')
  // Hit sign in
  await page.locator('#main > div > div > div > div > div > form > fieldset > button').click()

  // Verify automatically navigate to homepage
  expect(await page.locator('#main > div > div > div > div > div > ul > li').textContent()).toContain('email or password is invalid')
});