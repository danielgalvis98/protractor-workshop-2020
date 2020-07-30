import { ElementFinder, element, by } from 'protractor';

export class BankPaymentPage {
  private confirmOrderButton: ElementFinder;

  constructor () {
    this.confirmOrderButton = element(by.buttonText('I confirm my order'));
  }

  public async confirmOrder(): Promise<void> {
    await this.confirmOrderButton.click();
  }
}
