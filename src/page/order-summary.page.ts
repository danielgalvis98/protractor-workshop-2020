import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private orderConfirmationText: ElementFinder;

  constructor () {
    /* Here, it would be useful to have an id or title for the element we want to select,
    but since there is a lack of clear ids, classes ore any other attributes, it is difficult
    to be to much precise. However, it can still be improved by being more specific about the
    parent elements. Also, I will remove the #center_column selector since the advice can change
    from position.*/
    this.orderConfirmationText = $('p.cheque-indent > strong');
  }

  public async getTitle(): Promise<string> {
    const title: string = await this.orderConfirmationText.getText();
    return title;
  }
}
