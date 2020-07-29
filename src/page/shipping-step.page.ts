import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private acceptTermsOfServiceCheckbox: ElementFinder;
  private proceedCheckoutButton: ElementFinder;

  constructor () {
    /* I think the selector of the checkbox could be left like it is, but the name is not
    really clear and maybe can be confused if for some other reasons other checkbocks are inserted.
    So, I add the specification of where it is supposed to be located */
    this.acceptTermsOfServiceCheckbox = $('p.checkbox > #uniform-cgv #cgv');

    /* Respecting this button, it has te same problem as the one on the addres step page,
    so I will correct it the same way. */
    this.proceedCheckoutButton = $('#form > p.cart_navigation > button[name="processCarrier"] > span');
  }

  public async acceptTermsOfService(): Promise<void> {
    await this.acceptTermsOfServiceCheckbox.click();
  }

  public async goToPaymentMenu(): Promise<void> {
    await this.proceedCheckoutButton.click();
  }
}
