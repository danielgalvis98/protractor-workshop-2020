import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductListPage {
  private addToCartButton: ElementFinder;

  constructor () {
    this.addToCartButton = $('ul.product_list a[data-id-product="1"][title="Add to cart"]');
  }

  public async addShirtToCart(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.addToCartButton), 5000);
    await this.addToCartButton.click();
  }
}
