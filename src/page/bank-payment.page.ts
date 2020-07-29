import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private confirmOrderButton: ElementFinder;

  constructor () {
    /* Here the button doesn't have any id, title or name, so it is difficult to locate it
    on a better way than the one already implemented. Anyway, I would recommend to the developper to
    include some id to the button */
    this.confirmOrderButton = $('#cart_navigation > button > span');
  }

  public async confirmOrder(): Promise<void> {
    await this.confirmOrderButton.click();
  }
}
