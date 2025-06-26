import { test } from "@playwright/test"; // import playwright

//hook to run before all test - example preconditions etc
//not used often maybe to check database
// test.beforeAll(() => {

// })

//hook to run before each test to remove duplicate code
test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test.describe("suite1", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Chart").click();
  });

  // first test
  test("the first test", async ({ page }) => {
    await page.getByText("Form Layouts").click();
  });

  // second test
  test("navigate to datepicker page", async ({ page }) => {
    await page.getByText("Datepicker").click();
  });
});

test.describe("suite2", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Forms").click();
  });

  // first test
  test("the first test", async ({ page }) => {
    await page.getByText("Form Layouts").click();
  });

  // second test
  test("navigate to datepicker page", async ({ page }) => {
    await page.getByText("Datepicker").click();
  });
});

//after hooks
//example delete from database
// test.afterAll(() => {

// })
