import { Locator, Page } from "@playwright/test";
import { HelperBase } from "./helperBase";


export class NavigationPage extends HelperBase {
  //readonly page: Page; // removed becuase of extends for HelperBase
  // readonly formLayOutMenuItem: Locator
  // readonly datePickerMenuItem: Locator
  // readonly smartTableMenuItem: Locator
  // readonly toastrMenuItem: Locator
  // readonly toolTipMenuItem: Locator

  constructor(page: Page) {
    super(page)
    //this.page = page;
    // this.formLayOutMenuItem = page.getByText("Form Layouts")
    // this.datePickerMenuItem = page.getByText("Datepicker")
    // this.smartTableMenuItem = page.getByText("Smart Table")
    // this.toastrMenuItem = page.getByText("Toastr")
    // this.toolTipMenuItem = page.getByText("Tooltip")
  }
  async formLayoutsPage() {
    await this.selectGroupMenuItem('Forms')
    // await this.formLayOutMenuItem.click()
    await this.page.getByText("Form Layouts").click()
    await this.waitForNumberOfSeconds(2) //helperBase function
  }

  async datePickerPage(){
    await this.selectGroupMenuItem('Forms')
    // await this.datePickerMenuItem.click()
    await this.page.getByText("Datepicker").click()
  }

  async smartTablePage(){
    await this.selectGroupMenuItem('Tables & Data')    
    // await this.smartTableMenuItem.click()
    await this.page.getByText("Smart Table").click()
  }

  async toastrPage(){
    await this.selectGroupMenuItem('Modal & Overlays')      
    // await this.toastrMenuItem.click()
    await this.page.getByText("Toastr").click()
  }

  async toolTipPage(){
    await this.selectGroupMenuItem('Modal & Overlays')      
    // await this.toolTipMenuItem.click()
    await this.page.getByText("Tooltip").click()
  }

  private async selectGroupMenuItem(groupItemTitle: string){
    const groupMenuItem = this.page.getByTitle(groupItemTitle)
    const expandedState = await groupMenuItem.getAttribute('aria-expanded')
    if (expandedState == "false") {
        await groupMenuItem.click()
    }

  }

}
