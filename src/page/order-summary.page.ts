import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private orderConfirmationText: ElementFinder;

  constructor () {
    this.orderConfirmationText = $('p.cheque-indent');
  }

  public async getTitle(): Promise<string> {
    const title: string = await this.orderConfirmationText.getText();
    return title;
  }
}
