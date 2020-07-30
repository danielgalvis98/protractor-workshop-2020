import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private proccedCheckoutButton: ElementFinder;

  /* Selecting the cart_navigation class can be a good idea, but if we add another span to any
  option inside it, the program could crash. So, I think is better to specify inside which element
  should the span be.
  */
  constructor () {
    this.proccedCheckoutButton = $('.cart_navigation > a[title="Proceed to checkout"]');
  }

  public async confirmAndCheckout(): Promise<void> {
    await this.proccedCheckoutButton.click();
  }
}
