import Page from "./page";

class SearchPage extends Page {
  // selectors
  public get searchInput() {
    return $("[class='devsite-search-field devsite-search-query']");
  }

  // actions
  public async clickSearchInput() {
    await (await this.searchInput).click();
  }

  public async setSearchInputValue(value: string) {
    await (await this.searchInput).setValue(value);
  }

  public async startSearch() {
    await browser.keys("Enter");
  }

  public open() {
    return super.open("");
  }
}

export default new SearchPage();
