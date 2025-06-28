import { test, expect } from "@playwright/test"; // import playwright

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test.describe("Form Layouts page", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Forms").click();
    await page.getByText("Form Layouts").click();
  });

  test("input fields", async ({ page }) => {
    // locates using the grid card email textbox
    const usingTheGridEmailInput = page
      .locator("nb-cards", { hasText: "Using the Grid" })
      .getByRole("textbox", { name: "Email" });
    //enters characters to email textbox
    await usingTheGridEmailInput.fill("test@test.com");



  });
});
