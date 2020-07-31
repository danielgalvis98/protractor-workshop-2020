import { $$, ElementFinder, browser, ExpectedConditions, ElementArrayFinder } from 'protractor';

export class ProductListPage {
  private products: ElementArrayFinder;

  constructor () {
    this.products = $$('.product-container');
  }

  private async findByProduct(productName: string): Promise <ElementFinder> {
    return this.products.filter(async (elem) => {
      const elemName: string = await elem.$('a.product-name').getAttribute('title');
      return elemName === productName;
    }).first();
  }

  public async selectProduct(productName: string): Promise<void> {
    const addToCartButton: ElementFinder = (await this.findByProduct(productName)).$('a[title="Add to cart"]');
    await browser.wait(
      ExpectedConditions.elementToBeClickable(addToCartButton), 5000);
    await addToCartButton.click();
  }
}
