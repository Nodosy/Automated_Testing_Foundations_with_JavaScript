import ZerobinPage from "../pageobjectsZerobin/zerobin.page";
import GoogleCloudPage from "../pageobjectsGoogleCloud/googleCloud.page";

describe("Zerobin application test suite", () => {
  it("[I Can Win] should open zerobin and paste text", async () => {
    await ZerobinPage.open();

    await ZerobinPage.setTextareaValue("Hello from WebDriver");

    await ZerobinPage.selectExpiration("value", "10min");

    await browser.pause(3000);
  });
  it("[Bring It On] should open url and paste code", async () => {
    await ZerobinPage.open();
    await expect(browser).toHaveUrl("https://zerobin.net/");
    await expect(browser).toHaveTitle("ZeroBin.net");

    await ZerobinPage.setTextareaValue(
      'git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force'
    );

    await ZerobinPage.selectExpiration("value", "10min");

    await ZerobinPage.selectFormatter("value", "plaintext");

    await ZerobinPage.clickCheckboxBurn();

    await browser.pause(5000);

    await ZerobinPage.clickSendButton();

    await expect(ZerobinPage.resultLink).toHaveTextContaining("Your paste is ");
    await expect(ZerobinPage.previewMessage).toHaveText(
      'git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force'
    );
  });
});

describe("google cloud test suite", () => {
  it("[Hurt Me Plenty] should open google cloud", async () => {
    await GoogleCloudPage.open();

    await GoogleCloudPage.clickSearchInput();

    await GoogleCloudPage.setSearchInputValue(
      "Google Cloud Platform Pricing Calculator"
    );

    await GoogleCloudPage.startSearch();

    await browser.pause(3000);

    await GoogleCloudPage.clickCalculatorLinkBoldTag();

    await browser.pause(3000);

    await GoogleCloudPage.switchToFirstiFrame();

    await GoogleCloudPage.switchToSecndiFrame();

    await GoogleCloudPage.setInstancesValue(4);

    // await GoogleCloudPage.setRegionRegular();
    // await expect(await GoogleCloudPage.region).toExist();

    // await GoogleCloudPage.clickRegion();

    await GoogleCloudPage.clickAddToEstimateButton();

    await browser.pause(3000);

    await expect(await GoogleCloudPage.regionFromList).toHaveTextContaining(
      "Region: Iowa"
    );
    await expect(await GoogleCloudPage.VMClassFromList).toHaveTextContaining(
      "Provisioning model: Regular"
    );
    await expect(
      await GoogleCloudPage.instanceTypeFromList
    ).toHaveTextContaining("Instance type: e2-standard-2");
    await expect(await GoogleCloudPage.totalPrice).toHaveTextContaining(
      "Total Estimated Cost: USD 195.67 per 1 month"
    );
  });
  it("[Hardcore] should", async () => {
    await GoogleCloudPage.open();
  });
});

// describe("[Hurt Me Plenty]", () => {
//     it.only("should open google cloud", async () => {
//       await browser.url("https://cloud.google.com/");

//       const searchInputElement = await $(
//         "[class='devsite-search-field devsite-search-query']"
//       );
//       await expect(searchInputElement).toBeDisplayed();
//       await expect(searchInputElement).toExist();
//       await searchInputElement.click();
//       await searchInputElement.setValue(
//         "Google Cloud Platform Pricing Calculator"
//       );
//       await browser.keys("Enter");

//       await expect(browser).toHaveTitleContaining(
//         "Google Cloud Platform Pricing Calculator"
//       );
//       const googleSpan = await $(".devsite-search-term");
//       await expect(googleSpan).toBeDisplayed();
//       await expect(googleSpan).toExist();
//       const calculatorLink = await $("b=Google Cloud Pricing Calculator");
//       await expect(calculatorLink).toBeDisplayed();
//       await expect(calculatorLink).toExist();
//       await calculatorLink.click();
//       await expect(browser).toHaveUrl(
//         "https://cloud.google.com/products/calculator"
//       );
//       await expect(browser).toHaveTitleContaining(
//         "Google Cloud Pricing Calculator"
//       );

//       await browser.pause(2000);
//       await browser.switchToFrame(0);

//       await browser.pause(2000);
//       await browser.switchToFrame(await $("#myFrame"));

//       const instances = await $("#input_86");
//       await instances.setValue("4");

//       const instances_for = await $("#input_87");
//       await instances_for.setValue("");

//       const addToEstimate = await $(
//         "button[class='md-raised md-primary cpc-button md-button md-ink-ripple']"
//       );
//       await addToEstimate.click();

//       const estimate = await $("#compute span");
//       await expect(estimate).toHaveTextContaining("Compute Engine");

//       await browser.pause(3000);
//       const totalPrice = await $(".md-title .ng-binding");
//       await expect(totalPrice).toHaveTextContaining("USD 195.67");
//       await browser.pause(3000);

//       browser.newWindow("https://10minutemail.com/");
//       expect(browser).toHaveTitleContaining(
//         "10 Minute Mail - Free Anonymous Temporary email - 10 Minute Mail - Free Anonymous Temporary email"
//       );
//       const newEmail = await $("#mail_address");
//       const mailValue = await newEmail.getValue();
//       console.log(await newEmail.getValue());

//       browser.switchWindow("google.com");
//       expect(browser).toHaveTitle("Google Cloud Pricing Calculator");
//       await browser.pause(2000);
//       await browser.switchToFrame(0);
//       await browser.pause(2000);
//       await browser.switchToFrame(0);

//       const emailEstimate = await $("#email_quote");
//       await emailEstimate.click();

//       // const sendMail = await $("#input_475");
//       const firstName = await $("#input_455");
//       const lastName = await $("#input_456");
//       const sendMail = await $("#input_457");
//       // await sendMail.setValue(mailValue);
//       // browser.closeWindow();
//     });
//   });
