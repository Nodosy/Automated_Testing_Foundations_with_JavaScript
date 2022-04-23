const expectChai = require("chai").expect;
// npx wdio run wdio.conf.js
describe("[I Can Win]", () => {
  it("should open https://zerobin.net/", async () => {
    await browser.url("https://zerobin.net/");

    await expect(browser).toHaveUrl("https://zerobin.net/");
    await expect(browser).toHaveTitle("ZeroBin.net");

    const message = await $("#message");
    await expect(message).toBeDisplayed();
    await expect(message).toExist();
    await message.setValue("Hello from WebDriver");

    const selectItem = await $("#pasteExpiration");
    await expect(selectItem).toBeDisplayed();
    await expect(selectItem).toExist();
    const optionItem = await $(selectItem).selectByIndex(1);

    const sendButton = await $("#sendbutton");
    await expect(sendButton).toBeDisplayed();
    await expect(sendButton).toExist();
    await sendButton.click();
    const resultLink = await $("#pastelink");
    await expect(resultLink).toBeDisplayed();
    await expect(resultLink).toExist();
    await expect(resultLink).toHaveTextContaining("Your paste is ");

    const resultCode = await $("#prettyprint");
    await expect(resultCode).toBeDisplayed();
    await expect(resultCode).toExist();
    await expect(resultCode).toHaveTextContaining("Hello from WebDriver");
  });
});
describe("[Hurt Me Plenty]", () => {
  it.only("should open google cloud", async () => {
    await browser.url("https://cloud.google.com/");

    const searchInputElement = await $(
      "[class='devsite-search-field devsite-search-query']"
    );
    await expect(searchInputElement).toBeDisplayed();
    await expect(searchInputElement).toExist();
    await searchInputElement.click();
    await searchInputElement.setValue(
      "Google Cloud Platform Pricing Calculator"
    );
    await browser.keys("Enter");

    await expect(browser).toHaveTitleContaining(
      "Google Cloud Platform Pricing Calculator"
    );
    const googleSpan = await $(".devsite-search-term");
    await expect(googleSpan).toBeDisplayed();
    await expect(googleSpan).toExist();
    const calculatorLink = await $("b=Google Cloud Pricing Calculator");
    await expect(calculatorLink).toBeDisplayed();
    await expect(calculatorLink).toExist();
    await calculatorLink.click();
    await expect(browser).toHaveUrl(
      "https://cloud.google.com/products/calculator"
    );
    await expect(browser).toHaveTitleContaining(
      "Google Cloud Pricing Calculator"
    );

    await browser.pause(2000);
    await browser.switchToFrame(0);

    await browser.pause(2000);
    await browser.switchToFrame(await $("#myFrame"));

    const instances = await $("#input_81");
    await instances.setValue("4");

    const instances_for = await $("#input_82");
    await instances_for.setValue("");

    const addToEstimate = await $(
      "button[class='md-raised md-primary cpc-button md-button md-ink-ripple']"
    );
    await addToEstimate.click();

    const estimate = await $("#compute span");
    await expect(estimate).toHaveTextContaining("Compute Engine");

    await browser.pause(3000);
    const totalPrice = await $(".md-title .ng-binding");
    await expect(totalPrice).toHaveTextContaining("USD 195.67");
    await browser.pause(3000);

    browser.newWindow("https://10minutemail.com/");
    expect(browser).toHaveTitleContaining(
      "10 Minute Mail - Free Anonymous Temporary email - 10 Minute Mail - Free Anonymous Temporary email"
    );
    const newEmail = await $("#mail_address");
    const mailValue = await newEmail.getValue();
    console.log(await newEmail.getValue());

    browser.switchWindow("google.com");
    expect(browser).toHaveTitle("Google Cloud Pricing Calculator");
    await browser.pause(2000);
    await browser.switchToFrame(0);
    await browser.pause(2000);
    await browser.switchToFrame(0);

    const emailEstimate = await $("#email_quote");
    await emailEstimate.click();

    // const sendMail = await $("#input_475");
    const firstName = await $("#input_455");
    const lastName = await $("#input_456");
    const sendMail = await $("#input_457");
    // await sendMail.setValue(mailValue);
    // browser.closeWindow();
  });
});
