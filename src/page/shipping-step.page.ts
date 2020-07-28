import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private proceedCheckoutButton: ElementFinder;

  constructor () {
    this.proceedCheckoutButton = $('#cgv');
  }

  public async goToPaymentMenu(): Promise<void> {
    await this.proceedCheckoutButton.click();
  }
}
