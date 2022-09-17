import ZerobinPage from "../pageobjectsZerobin/zerobin.page";

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
