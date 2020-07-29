import { $, ElementFinder } from 'protractor';

export class AddresStepPage {
  private proceedCheckoutButton: ElementFinder;

  constructor () {
    /* It is not very clear what element is being selected and can easily crash if other elements
    are added or the order of them changes. We fix it the same as the past ones: tying to be more
    specific, based on id's, names and properties about what exact element we want to select*/
    this.proceedCheckoutButton = $(
      'form > p.cart_navigation > button[name="processAddress"] > span');
  }

  public async goToShippingStep(): Promise<void> {
    await this.proceedCheckoutButton.click();
  }
}
