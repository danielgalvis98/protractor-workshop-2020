import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payByBankWireOption: ElementFinder;
  private payByCheckOption: ElementFinder;

  constructor () {
    this.payByBankWireOption = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
    this.payByCheckOption = $('#HOOK_PAYMENT > div:nth-child(2) > div > p > a');
  }

  public async payByBankwire(): Promise<void> {
    await this.payByBankWireOption.click();
  }

  public async payByCheck(): Promise<void> {
    await this.payByCheckOption.click();
  }
}
