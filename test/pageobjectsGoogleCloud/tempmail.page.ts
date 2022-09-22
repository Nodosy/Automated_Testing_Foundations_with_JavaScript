class TempmailPage {
  // selectors
  public get newEmailAddress() {
    return $("#mail-area").$("div*=@dragonhospital.net");
  }

  public get emailFromGoogle() {
    return $("#inbox-dataList a");
  }

  public get totalEstimate() {
    return $("#ReadContent table h2");
  }

  // actions
  public async openNewWindow() {
    await browser.newWindow("https://tempmail.dev/");
  }

  public async getNewEmailAddressValue() {
    let newEmailAddressValue = await this.newEmailAddress;
    await newEmailAddressValue.waitForDisplayed({ timeout: 15000 });
    return await newEmailAddressValue.getText();
  }
  public async getNewTempMail() {
    const elem = await $("#current-mail");
    await elem.waitUntil(
      async function () {
        return (await this.getText()).includes("@");
      },
      {
        timeout: 15000,
        timeoutMsg: "expected text to be different after 15s",
      }
    );
    return await elem.getText();
  }

  public async switchWindowToGoogle() {
    await browser.switchWindow("google.com");
  }

  public async switchToTempmail() {
    await browser.switchWindow("tempmail.dev");
  }

  public async clickOnEmail() {
    let elem = await this.emailFromGoogle;
    await elem.waitForDisplayed({ timeout: 30000 });
    await elem.click();
  }
}

export default new TempmailPage();
