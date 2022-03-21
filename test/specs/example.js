// npx wdio run wdio.conf.js
describe("[I Can Win]", () => {
  it.only("should open https://zerobin.net/", async () => {
    await browser.url("https://zerobin.net/");

    await expect(browser).toHaveUrl("https://zerobin.net/");
    await expect(browser).toHaveTitle("ZeroBin.net");

    const message = $("#message");
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
  it("should open google cloud", async () => {
    await browser.url("https://cloud.google.com/");

    const searchInputElement = await $(
      "[class='devsite-search-field devsite-search-query']"
    );
    await expect(searchInputElement).toBeDisplayed();
    await expect(searchInputElement).toExist();
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
    const h2Head = await $("h3=Why Google");
    await expect(h2Head).toBeDisplayed();
    await expect(h2Head).toExist();

    // 🔥
    // await browser.switchToFrame(
    //   $(
    //     "//iframe[@src='/products/calculator/index_d6a98ba38837346d20babc06ff2153b68c2990fa24322fe52c5f83ec3a78c6a0.frame']"
    //   )
    // );
    const myFrame = await browser.switchToFrame(0);
    await expect(myFrame).toExist();
    // const computeEngine = await $("#input-0");
    // await expect(computeEngine).toBeDisplayed();
    // await expect(computeEngine).toExist();
    // await computeEngine.setValue("Compute Engine");
    // await browser.keys("Enter");
  });
});
