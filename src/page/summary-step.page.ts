import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private proccedCheckoutButton: ElementFinder;

  constructor () {
    this.proccedCheckoutButton = $('.cart_navigation > a[title="Proceed to checkout"]');
  }

  public async confirmAndCheckout(): Promise<void> {
    await this.proccedCheckoutButton.click();
  }
}
