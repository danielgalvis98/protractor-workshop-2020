import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private emailField: ElementFinder;
  private passwordField: ElementFinder;
  private signInButton: ElementFinder;

  constructor (){
    this.emailField = $('#email');
  }

  public async goToTshirtMenu(): Promise<void> {
    await this.tShirtMenu.click();
  }
}
