import SearchPage from "../pageobjectsGoogleCloud/search.page";
import SearchResultsPage from "../pageobjectsGoogleCloud/searchResults.page";
import PricingCalculatorPage from "../pageobjectsGoogleCloud/pricingCalculator.page";
import TempmailPage from "../pageobjectsGoogleCloud/tempmail.page";

describe("[Hardcore]", () => {
  it("should open google cloud", async () => {
    await SearchPage.open();

    await SearchPage.clickSearchInput();

    await SearchPage.setSearchInputValue(
      "Google Cloud Platform Pricing Calculator"
    );

    await SearchPage.startSearch();

    await SearchResultsPage.clickCalculatorLinkBoldTag();

    await PricingCalculatorPage.switchToFirstiFrame();

    await PricingCalculatorPage.switchToSecondiFrame();

    await PricingCalculatorPage.setInstancesValue(4);

    await PricingCalculatorPage.clickAddToEstimateButton();

    await expect(
      await PricingCalculatorPage.regionFromList
    ).toHaveTextContaining("Region: Iowa");
  });
  it("shoud switch window", async () => {
    await TempmailPage.openNewWindow();

    let emailAdressValue = await TempmailPage.getNewTempMail();

    await TempmailPage.switchWindowToGoogle();

    await PricingCalculatorPage.switchToFirstiFrame();

    await PricingCalculatorPage.switchToSecondiFrame();

    await PricingCalculatorPage.clickEmailEstimate();

    await PricingCalculatorPage.setModalWindowEmailInputValue(
      await emailAdressValue
    );

    await PricingCalculatorPage.clickEmailFormButtonsSendEmail();

    await TempmailPage.switchToTempmail();

    await TempmailPage.clickOnEmail();

    await expect(await TempmailPage.totalEstimate).toHaveTextContaining(
      "USD 195.67"
    );
  });
});
