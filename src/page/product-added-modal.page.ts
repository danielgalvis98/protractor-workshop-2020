import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductAddedModalPage {
  private proccedCheckoutButton: ElementFinder;

  constructor () {
    this.proccedCheckoutButton = $('[style*="display: block;"] .button-container > a');
  }

  public async proccedToCheckout(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.proccedCheckoutButton), 5000);
    await this.proccedCheckoutButton.click();
  }
}
