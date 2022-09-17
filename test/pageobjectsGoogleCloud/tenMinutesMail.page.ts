class TenMinutesMailPage {
  // selectors
  public get newEmailAddress() {
    return $("#mail_address");
  }

  //   public get mailMessageSection() {
  //     return $("#mail_messages");
  //   }

  //   public get table() {
  //     return $("table.quote");
  //   }

  //   public get tableRows() {
  //     return this.table.$$("tr");
  //   }

  //   public get priceRow() {
  //     return this.tableRows[1];
  //   }

  //   public get priceRowData() {
  //     return this.priceRow.$$("td");
  //   }

  // actions
  public async openNewWindow() {
    await browser.newWindow("https://10minutemail.com/");
  }

  public async getNewEmailAddressValue() {
    let newEmailAddressValue = await this.newEmailAddress;
    return await newEmailAddressValue.getValue();
  }

  //   public async clickMailMessageSection() {
  //     let emailmessage = await this.mailMessageSection;
  //     await emailmessage.waitForDisplayed({ timeout: 300000 });
  //     await emailmessage.click();
  //   }

  //   public async getPrice() {
  //     let emailTable = await this.table;
  //     await emailTable.waitForDisplayed({ timeout: 300000 });

  //     let data = await this.priceRowData;
  //     let priceData = await data[1];
  //     return await priceData.getText();
  //   }

  public async switchWindowToGoogle() {
    await browser.switchWindow("google.com");
  }

  public async switchToTenMinutesMail() {
    await browser.switchWindow("10minutemail.com");
  }
}

export default new TenMinutesMailPage();
