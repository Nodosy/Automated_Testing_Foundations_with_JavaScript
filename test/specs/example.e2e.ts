import GithubGistPage from "../pageobjects/zerobin.page";

describe("Zerobin application test suite", () => {
  it("[Bring It On] should open zerobin and paste text", async () => {
    await GithubGistPage.open();

    await GithubGistPage.setTextareaValue("Hello from WebDriver");

    await GithubGistPage.selectExpiration("value", "10min");
  });
  it("[Bring It On] should open url and paste code", async () => {
    await GithubGistPage.open();
    await expect(browser).toHaveUrl("https://zerobin.net/");
    await expect(browser).toHaveTitle("ZeroBin.net");

    await GithubGistPage.setTextareaValue(
      'git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force'
    );

    await GithubGistPage.selectExpiration("value", "10min");

    await GithubGistPage.selectFormatter("value", "plaintext");

    await GithubGistPage.clickCheckboxBurn();

    await browser.pause(5000);

    await GithubGistPage.clickSendButton();

    await expect(GithubGistPage.resultLink).toHaveTextContaining(
      "Your paste is "
    );
    await expect(GithubGistPage.previewMessage).toHaveText(
      'git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force'
    );
  });
});
