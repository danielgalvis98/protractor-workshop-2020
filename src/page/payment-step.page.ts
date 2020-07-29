import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payByBankWireOption: ElementFinder;
  private payByCheckOption: ElementFinder;

  constructor () {
    /* It is not a good idea to select the items by their position, so we are to locate them
    with id's and class names more specifics to them */
    this.payByBankWireOption = $('#HOOK_PAYMENT a.bankwire');
    this.payByCheckOption = $('#HOOK_PAYMENT a.cheque');
  }

  public async payByBankwire(): Promise<void> {
    await this.payByBankWireOption.click();
  }

  public async payByCheck(): Promise<void> {
    await this.payByCheckOption.click();
  }
}
