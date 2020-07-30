import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductAddedModalPage {
  private proccedCheckoutButton: ElementFinder;

  constructor () {
    /* Again, the locator seems too general and can easily be broken if there are other options,
    can probablaly change and is not very clear what is it selecting. I think is better to chose
    elements selecting id's and property values where it clearly indicates what the element
    is for. */
    this.proccedCheckoutButton = $('a[title="Proceed to checkout"]');
  }

  public async proccedToCheckout(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.proccedCheckoutButton), 5000);
    await this.proccedCheckoutButton.click();
  }
}
