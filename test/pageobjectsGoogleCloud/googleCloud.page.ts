import Page from "./page";

class GoogleCloudPage extends Page {
  // selectors
  public get searchInput() {
    return $("[class='devsite-search-field devsite-search-query']");
  }

  public get calculatorLinkBoldTag() {
    return $("b=Google Cloud Pricing Calculator");
  }

  public get instances() {
    return $("#input_90");
  }

  // public get region() {
  //   return $("#select_option_105 .md-text");
  // }
  // public get region() {
  //   return $("#select_container_108 md-select-menu");
  // }
  // public get region() {
  //   return $("#select_container_108").$("[value='preemptible']").$(".md-text");
  //   return $("#select_container_108").$("[value='preemptible']");
  //   return $("#select_container_108");
  // }

  public get addToEstimateButton() {
    return $(
      "button[class='md-raised md-primary cpc-button md-button md-ink-ripple']"
    );
  }

  public get listItems() {
    return $$("div.md-list-item-text.ng-binding");
  }

  public get regionFromList() {
    return this.listItems[0];
  }

  public get VMClassFromList() {
    return this.listItems[2];
  }

  public get instanceTypeFromList() {
    return this.listItems[3];
  }

  public get totalPrice() {
    return $(".md-title .ng-binding");
  }

  // actions
  public async clickSearchInput() {
    await (await this.searchInput).click();
  }

  public async setSearchInputValue(value: string) {
    await (await this.searchInput).setValue(value);
  }

  public async clickCalculatorLinkBoldTag() {
    await (await this.calculatorLinkBoldTag).click();
  }

  public async startSearch() {
    await browser.keys("Enter");
  }

  public async switchToFirstiFrame() {
    await browser.switchToFrame(0);
  }

  public async switchToSecndiFrame() {
    await browser.switchToFrame(await $("#myFrame"));
  }

  public async setInstancesValue(value: number) {
    await (await this.instances).setValue(value);
  }

  // public async setRegion() {
  //   let el = await this.region;
  //   await el.click();
  // }
  // public async setRegionRegular() {
  //   await (await this.region).selectByIndex(1);
  // }
  // public async clickRegion() {
  //   await (await this.region).click();
  // }

  public async clickAddToEstimateButton() {
    await (await this.addToEstimateButton).click();
  }

  public open() {
    return super.open("");
  }
}

export default new GoogleCloudPage();
