import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private proccedCheckoutButton: ElementFinder;

  constructor (){
    this.proccedCheckoutButton = $('[style*="display: block;"] .button-container > a');
  }

  public async proccedToCheckout(): Promise<void> {
    await this.proccedCheckoutButton.click();
  }
}
