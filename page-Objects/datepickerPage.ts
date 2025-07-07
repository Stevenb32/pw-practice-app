import { Page, expect } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class DatepickerPage extends HelperBase{
  //private readonly page: Page;

  constructor(page: Page) {
    super(page)
    //this.page = page;
  }

  async selectCommonDatePickerDateFromToday(numberOfDaysFromToday: number) {
    const calendarInputField = this.page.getByPlaceholder("Form Picker");
    await calendarInputField.click();
    const datetoAssert = await this.selectDateInTheCalendar(numberOfDaysFromToday)
    await expect(calendarInputField).toHaveValue(datetoAssert);
  }

  async selectDatepickerWithRangeFromToday(startDateFromToday: number, endDateFromToday: number){
    const calendarInputField = this.page.getByPlaceholder("Range Picker");
    await calendarInputField.click();
    const datetoAssertStart = await this.selectDateInTheCalendar(startDateFromToday)
    const datetoAssertEnd = await this.selectDateInTheCalendar(endDateFromToday)
    const datetoAssert = `${datetoAssertStart} - ${datetoAssertEnd}`
    await expect(calendarInputField).toHaveValue(datetoAssert);



  }

  private async selectDateInTheCalendar(numberOfDaysFromToday: number){
    let date = new Date(); // creates new date object
    date.setDate(date.getDate() + numberOfDaysFromToday); // sets date object to today + whatever
    const expectedDate = date.getDate().toString(); // creates const that is set to todays date to string
    const expectedMonthShort = date.toLocaleString("En-US", { month: "short" }); // gets month short
    const expectedMonthLong = date.toLocaleString("En-US", { month: "long" }); // gets month long
    const expectedYear = date.getFullYear(); // gets year
    const datetoAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`; // sets assert to date format

    let calendarMonthAndYear = await this.page
      .locator("nb-calendar-view-mode")
      .textContent();
    const expectedMontAndYear = ` ${expectedMonthLong} ${expectedYear}`;
    while (!calendarMonthAndYear.includes(expectedMontAndYear)) {
      // clicks next month until correct month is selected
      await this.page
        .locator('nb-calendar-pageable-navigation [data-name="chevron-right"]')
        .click();
      calendarMonthAndYear = await this.page
        .locator("nb-calendar-view-mode")
        .textContent();
    }

    await this.page
      .locator('.day-cell.ng-star-inserted')
      .getByText(expectedDate, { exact: true })
      .click();

      return datetoAssert
  }
}
