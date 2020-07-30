import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private acceptTermsOfServiceCheckbox: ElementFinder;
  private proceedCheckoutButton: ElementFinder;

  constructor () {
    this.acceptTermsOfServiceCheckbox = $('#cgv');
    this.proceedCheckoutButton = $('button[name="processCarrier"]');
  }

  public async acceptTermsOfService(): Promise<void> {
    await this.acceptTermsOfServiceCheckbox.click();
  }

  public async goToPaymentMenu(): Promise<void> {
    await this.proceedCheckoutButton.click();
  }
}
