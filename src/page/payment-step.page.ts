import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payByBankWireOption: ElementFinder;
  private payByCheckOption: ElementFinder;

  constructor () {
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
