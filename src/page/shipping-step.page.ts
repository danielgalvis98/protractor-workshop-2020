import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private acceptTermsOfServiceCheckbox: ElementFinder;
  private proceedCheckoutButton: ElementFinder;

  constructor () {
    this.proceedCheckoutButton = $('#cgv');
    this.proceedCheckoutButton = $('#form > p > button > span');
  }

  public async acceptTermsOfService(): Promise<void> {
    await this.acceptTermsOfServiceCheckbox.click();
  }

  public async goToPaymentMenu(): Promise<void> {
    await this.proceedCheckoutButton.click();
  }
}
