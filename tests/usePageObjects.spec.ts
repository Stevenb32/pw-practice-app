import { test, expect } from "@playwright/test"; // import playwright
import { PageManager } from "../page-Objects/pageManager";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
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

  await pm.navigateTo().formLayoutsPage();
  await pm.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption(
    "test@test.com",
    "Welcome1",
    "Option 1"
  );
  await pm.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(
    "John Smith",
    "john@test.com",
    true
  );

  await pm.navigateTo().datePickerPage();
  await pm.onDatepickerPage().selectCommonDatePickerDateFromToday(5);
  await pm.onDatepickerPage().selectDatepickerWithRangeFromToday(6, 15);
});
