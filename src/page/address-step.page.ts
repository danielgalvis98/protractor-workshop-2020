import { $, ElementFinder } from 'protractor';

export class AddresStepPage {
  private proceedCheckoutButton: ElementFinder;

  constructor (){
    this.proceedCheckoutButton = $('#center_column > form > p > button > span');
  }

  public async goToShippingStep(): Promise<void> {
    await this.proceedCheckoutButton.click();
  }
}
