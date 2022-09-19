import SearchPage from "../pageobjectsGoogleCloud/search.page";
import SearchResultsPage from "../pageobjectsGoogleCloud/searchResults.page";
import PricingCalculatorPage from "../pageobjectsGoogleCloud/pricingCalculator.page";
import TenMinutesMailPage from "../pageobjectsGoogleCloud/tenMinutesMail.page";

describe("google cloud test suite", () => {
  it("[Hurt Me Plenty] should open google cloud", async () => {
    await SearchPage.open();

    await SearchPage.clickSearchInput();

    await SearchPage.setSearchInputValue(
      "Google Cloud Platform Pricing Calculator"
    );

    await SearchPage.startSearch();

    await browser.pause(3000);

    await SearchResultsPage.clickCalculatorLinkBoldTag();

    await browser.pause(3000);

    await PricingCalculatorPage.switchToFirstiFrame();

    await PricingCalculatorPage.switchToSecondiFrame();

    await PricingCalculatorPage.setInstancesValue(4);

    // await PricingCalculatorPage.clickRegularDiv();

    // await PricingCalculatorPage.clickSpotDiv();

    await browser.pause(2000);

    await PricingCalculatorPage.clickAddToEstimateButton();

    await browser.pause(3000);

    await expect(
      await PricingCalculatorPage.regionFromList
    ).toHaveTextContaining("Region: Iowa");
    await expect(
      await PricingCalculatorPage.VMClassFromList
    ).toHaveTextContaining("Provisioning model: Regular");
    await expect(
      await PricingCalculatorPage.instanceTypeFromList
    ).toHaveTextContaining("Instance type: e2-standard-2");
    await expect(await PricingCalculatorPage.totalPrice).toHaveTextContaining(
      "Total Estimated Cost: USD 195.67 per 1 month"
    );
  });
  it("[Hardcore] should", async () => {
    await SearchPage.open();

    await SearchPage.clickSearchInput();

    await SearchPage.setSearchInputValue(
      "Google Cloud Platform Pricing Calculator"
    );

    await SearchPage.startSearch();

    await browser.pause(3000);

    await SearchResultsPage.clickCalculatorLinkBoldTag();

    await browser.pause(3000);

    await PricingCalculatorPage.switchToFirstiFrame();

    await PricingCalculatorPage.switchToSecondiFrame();

    await browser.pause(3000);

    await PricingCalculatorPage.setInstancesValue(4);

    await browser.pause(3000);

    await PricingCalculatorPage.clickAddToEstimateButton();

    await browser.pause(3000);

    await expect(
      await PricingCalculatorPage.regionFromList
    ).toHaveTextContaining("Region: Iowa");

    await TenMinutesMailPage.openNewWindow();

    await browser.pause(3000);

    let emailAdressValue = await TenMinutesMailPage.getNewEmailAddressValue();

    await browser.pause(2000);

    await TenMinutesMailPage.switchWindowToGoogle();

    await browser.pause(2000);

    await PricingCalculatorPage.switchToFirstiFrame();

    await browser.pause(2000);

    await PricingCalculatorPage.switchToSecondiFrame();

    await PricingCalculatorPage.clickEmailEstimate();

    await PricingCalculatorPage.setModalWindowEmailInputValue(
      await emailAdressValue
    );

    await browser.pause(3000);

    await PricingCalculatorPage.clickEmailFormButtonsSendEmail();

    await browser.pause(3000);

    // await TenMinutesMailPage.switchToTenMinutesMail();

    // await browser.pause(3000);

    // await expect(await TenMinutesMailPage.getPrice()).toEqual("USD 195.67");
  });
});
