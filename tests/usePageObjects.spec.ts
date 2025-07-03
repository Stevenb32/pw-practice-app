import { test, expect } from "@playwright/test"; // import playwright
import { NavigationPage } from '../page-Objects/navigationPage' //import navigationPage.ts

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test('navigate to form page', async ({page}) => {
  const navigateTo = new NavigationPage (page)
  await navigateTo.formLayoutsPage()
    
})