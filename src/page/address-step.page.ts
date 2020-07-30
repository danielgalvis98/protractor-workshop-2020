import { $, ElementFinder } from 'protractor';

export class AddresStepPage {
  private proceedCheckoutButton: ElementFinder;

  constructor () {
    this.proceedCheckoutButton = $('button[name="processAddress"]');
  }

  public async goToShippingStep(): Promise<void> {
    await this.proceedCheckoutButton.click();
  }
}
