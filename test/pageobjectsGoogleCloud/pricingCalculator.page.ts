import Page from "./page";
import TenMinutesMailPage from "./tenMinutesMail.page";

class PricingCalculatorPage extends Page {
  // selectors

  public get instances() {
    return $("#input_90");
  }

  public get addToEstimateButton() {
    return $(
      "button[class='md-raised md-primary cpc-button md-button md-ink-ripple']"
    );
  }

  public get listItems() {
    return $$("div.md-list-item-text.ng-binding");
  }

  public get regionFromList() {
    return this.listItems[0];
  }

  public get VMClassFromList() {
    return this.listItems[2];
  }

  public get instanceTypeFromList() {
    return this.listItems[3];
  }

  public get totalPrice() {
    return $(".md-title .ng-binding");
  }

  public get emailEstimate() {
    return $("#email_quote");
  }

  public get emailForm() {
    return $("[name='emailForm']");
  }

  public get emailFormInputs() {
    return this.emailForm.$$("input");
  }

  public get emailFormInputsFirstName() {
    return this.emailFormInputs[0];
  }

  public get emailFormInputsEmail() {
    return this.emailFormInputs[2];
  }

  public get emailFormButtons() {
    return this.emailForm.$$("button");
  }

  public get emailFormButtonsSendEmail() {
    return this.emailFormButtons[1];
  }

  // actions

  public async switchToFirstiFrame() {
    await browser.switchToFrame(0);
  }

  public async switchToSecondiFrame() {
    await browser.switchToFrame(await $("#myFrame"));
  }

  public async setInstancesValue(value: number) {
    await (await this.instances).setValue(value);
  }

  public async clickAddToEstimateButton() {
    await (await this.addToEstimateButton).click();
  }

  public async clickEmailEstimate() {
    await (await this.emailEstimate).click();
  }

  public async setModalWindowEmailInputValue(value: string) {
    let el = await this.emailFormInputsEmail;
    await el.setValue(value);
  }

  public async clickEmailFormButtonsSendEmail() {
    await (await this.emailFormButtonsSendEmail).click();
  }

  public open() {
    return super.open("");
  }
}

export default new PricingCalculatorPage();
