import Page from "./page";

class SearchResultsPage extends Page {
  // selectors

  public get calculatorLinkBoldTag() {
    return $("b=Google Cloud Pricing Calculator");
  }

  // actions

  public async clickCalculatorLinkBoldTag() {
    await (await this.calculatorLinkBoldTag).click();
  }

  public open() {
    return super.open("");
  }
}

export default new SearchResultsPage();
