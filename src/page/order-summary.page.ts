import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private proccedCheckoutButton: ElementFinder;

  constructor () {
    this.proccedCheckoutButton = $('.cart_navigation span');
  }

  public async confirmAndCheckout(): Promise<void> {
    await this.proccedCheckoutButton.click();
  }
}
