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

  public get addToEstimateButton() {
    return $(
      "button[class='md-raised md-primary cpc-button md-button md-ink-ripple']"
    );
  }

  public get listItems() {
    return $$("[class='md-list-item-text ng-binding']");
  }

  // methods
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

  public async clickAddToEstimateButton() {
    await (await this.addToEstimateButton).click();
  }

  public async getRegion() {
    let el = await this.listItems[0];
    return await el.getText();
  }

  public open() {
    return super.open("");
  }
}

export default new GoogleCloudPage();
