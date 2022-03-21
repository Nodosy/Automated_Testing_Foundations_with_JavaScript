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
