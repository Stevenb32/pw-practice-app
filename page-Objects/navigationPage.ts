import { Locator, Page } from "@playwright/test";


export class NavigationPage {
  readonly page: Page;
  readonly formLayOutMenuItem: Locator
  readonly datePickerMenuItem: Locator
  readonly smartTableMenuItem: Locator
  readonly toastrMenuItem: Locator
  readonly toolTipMenuItem: Locator

  constructor(page: Page) {
    this.page = page
    this.formLayOutMenuItem = page.getByText("Form Layouts")
    this.datePickerMenuItem = page.getByText("Datepicker")
    this.smartTableMenuItem = page.getByText("Smart Table")
    this.toastrMenuItem = page.getByText("Toastr")
    this.toolTipMenuItem = page.getByText("Tooltip")
  }
  async formLayoutsPage() {
    await this.selectGroupMenuItem('Forms')
    await this.formLayOutMenuItem.click()
  }

  async datePickerPage(){
    await this.selectGroupMenuItem('Forms')
    await this.datePickerMenuItem.click()
  }

  async smartTablePage(){
    await this.selectGroupMenuItem('Tables & Data')    
    await this.smartTableMenuItem.click()
  }

  async toastrPage(){
    await this.selectGroupMenuItem('Modal & Overlays')      
    await this.toastrMenuItem.click()
  }

  async toolTipPage(){
    await this.selectGroupMenuItem('Modal & Overlays')      
    await this.toolTipMenuItem.click()
  }

  private async selectGroupMenuItem(groupItemTitle: string){
    const groupMenuItem = this.page.getByTitle(groupItemTitle)
    const expandedState = await groupMenuItem.getAttribute('aria-expanded')
    if (expandedState == "false") {
        await groupMenuItem.click()
    }

  }

}
