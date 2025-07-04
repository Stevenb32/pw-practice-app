import { test, expect } from "@playwright/test"; // import playwright
import { NavigationPage } from "../page-Objects/navigationPage"; //import navigationPage.ts
import { FormLayoutsPage } from "../page-Objects/formLayoutsPage";
import { DatepickerPage } from "../page-Objects/datepickerPage";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test("navigate to form page", async ({ page }) => {
  const navigateTo = new NavigationPage(page);

  await navigateTo.formLayoutsPage();
  await navigateTo.datePickerPage();
  await navigateTo.smartTablePage;
  await navigateTo.toastrPage();
  await navigateTo.toolTipPage();
});

test("parameterized methods", async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  const onFormLayoutsPage = new FormLayoutsPage(page);
  const onDatepickerPage = new DatepickerPage(page);

  await navigateTo.formLayoutsPage();
  await onFormLayoutsPage.submitUsingTheGridFormWithCredentialsAndSelectOption(
    "test@test.com",
    "Welcome1",
    "Option 1"
  );
  await onFormLayoutsPage.submitInlineFormWithNameEmailAndCheckbox(
    "John Smith",
    "john@test.com",
    true
  );

  await navigateTo.datePickerPage();
  await onDatepickerPage.selectCommonDatePickerDateFromToday(5);
  await onDatepickerPage.selectDatepickerWithRangeFromToday(6,15)
});
