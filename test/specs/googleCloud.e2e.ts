import SearchPage from "../pageobjectsGoogleCloud/search.page";
import SearchResultsPage from "../pageobjectsGoogleCloud/searchResults.page";
import PricingCalculatorPage from "../pageobjectsGoogleCloud/pricingCalculator.page";

describe("[Hurt Me Plenty]", () => {
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
  it("should open google cloud", async () => {
    await expect(
      await PricingCalculatorPage.VMClassFromList
    ).toHaveTextContaining("Provisioning model: Regular");
  });
  it("should open google cloud", async () => {
    await expect(
      await PricingCalculatorPage.instanceTypeFromList
    ).toHaveTextContaining("Instance type: e2-standard-2");
  });
  it("should open google cloud", async () => {
    await expect(await PricingCalculatorPage.totalPrice).toHaveTextContaining(
      "Total Estimated Cost: USD 195.67 per 1 month"
    );
  });
});
