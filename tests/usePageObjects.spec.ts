import { test, expect } from "@playwright/test"; // import playwright
import { PageManager } from "../page-Objects/pageManager";
import {faker} from '@faker-js/faker'

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("navigate to form page", async ({ page }) => {
  const pm = new PageManager(page);
  await pm.navigateTo().formLayoutsPage();
  await pm.navigateTo().datePickerPage();
  await pm.navigateTo().smartTablePage;
  await pm.navigateTo().toastrPage();
  await pm.navigateTo().toolTipPage();
});

test("parameterized methods", async ({ page }) => {
  const pm = new PageManager(page);
  const randomFullName = faker.person.fullName()
  const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`

  await pm.navigateTo().formLayoutsPage();
  await pm.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption(
    process.env.USERNAME,
    process.env.PASSWORD,
    "Option 1"
  );
  
  await page.screenshot({path: 'screenshots/formsLayoutsPage.png'})
  //const buffer = await page.screenshot()
  //console.log(buffer.toString('base64'))
  


  await pm.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(
    randomFullName,
    randomEmail,
    false
  );

  await page.locator('nb-card', {hasText: 'Inline form'}).screenshot({path: 'screenshots/inlineForm.png'})

  // await pm.navigateTo().datePickerPage();
  // await pm.onDatepickerPage().selectCommonDatePickerDateFromToday(5);
  // await pm.onDatepickerPage().selectDatepickerWithRangeFromToday(6, 15);
});
