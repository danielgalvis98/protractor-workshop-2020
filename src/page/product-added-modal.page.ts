import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductAddedModalPage {
  private proccedCheckoutButton: ElementFinder;

  constructor () {
    this.proccedCheckoutButton = $('a[title="Proceed to checkout"]');
  }

  public async proccedToCheckout(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.proccedCheckoutButton), 5000);
    await this.proccedCheckoutButton.click();
  }
}
