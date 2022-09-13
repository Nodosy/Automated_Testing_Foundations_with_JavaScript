import Page from "./page";

class GithubGistPage extends Page {
  // selectors
  public get textareaMessage() {
    return $("#message");
  }

  public get expiration() {
    return $("#pasteExpiration");
  }

  public get formatter() {
    return $("#pasteFormatter");
  }

  public get checkboxBurn() {
    return $("#burnafterreading");
  }

  public get buttonSend() {
    return $("#sendbutton");
  }

  public get resultLink() {
    return $("#pastelink");
  }

  public get previewMessage() {
    return $("#prettyprint");
  }

  // methods
  public async setTextareaValue(text: string) {
    await (await this.textareaMessage).setValue(text);
  }

  public async selectExpiration(attr: string, value: string) {
    let select = await this.expiration;
    await select.selectByAttribute(attr, value);
  }

  public async selectFormatter(attr: string, value: string) {
    let select = await this.formatter;
    await select.selectByAttribute(attr, value);
  }

  public async clickCheckboxBurn() {
    let el = await this.checkboxBurn;
    await el.click();
  }

  public async clickSendButton() {
    let el = await this.buttonSend;
    await el.click();
  }

  public async matchCode() {
    return await this.previewMessage.getText();
  }

  public open() {
    return super.open("");
  }
}

export default new GithubGistPage();
