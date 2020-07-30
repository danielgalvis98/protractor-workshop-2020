import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductListPage {
  private addToCartButton: ElementFinder;

  constructor () {
    /* Here, it is not a good idea to leave #center_column as the selector of the section, as
     it can easily change from column. It is better to select the div that explicitly contains
     the product list. Also, the speecific locator of the button can be dangerous if there are more
     products, so it's better if we specify the button from which exact product we can select*/
    this.addToCartButton = $('ul.product_list a[data-id-product="1"][title="Add to cart"]');
  }

  public async addShirtToCart(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.addToCartButton), 5000);
    await this.addToCartButton.click();
  }
}
