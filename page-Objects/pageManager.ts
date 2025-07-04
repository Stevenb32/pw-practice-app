import { Page, expect } from "@playwright/test";
import { NavigationPage } from "../page-Objects/navigationPage"; //import navigationPage.ts
import { FormLayoutsPage } from "../page-Objects/formLayoutsPage";
import { DatepickerPage } from "../page-Objects/datepickerPage";

export class PageManager {
  private readonly page: Page;
  private readonly navigationPage: NavigationPage;
  private readonly formLayoutsPage: FormLayoutsPage;
  private readonly datepickerPage: DatepickerPage;

  constructor(page: Page) {
    this.page = page;
    this.navigationPage = new NavigationPage(this.page);
    this.formLayoutsPage = new FormLayoutsPage(this.page);
    this.datepickerPage = new DatepickerPage(this.page);
  }

  navigateTo() {
    return this.navigationPage;
  }

  onFormLayoutsPage() {
    return this.formLayoutsPage;
  }

  onDatepickerPage() {
    return this.datepickerPage;
  }
}
