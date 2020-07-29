import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private emailField: ElementFinder;
  private passwordField: ElementFinder;
  private signInButton: ElementFinder;

  constructor () {
    /*These locators I think can be left like they are. Maybe the #email could be confused with the
    with the one for register, but as they are id's, they are different. */
    this.emailField = $('#email');
    this.passwordField = $('#passwd');
    this.signInButton = $('#SubmitLogin > span');
  }

  private async fillCredentials(email: string, password: string): Promise<void> {
    await this.emailField.sendKeys(email);
    await this.passwordField.sendKeys(password);
  }

  private async goToAddressPage(): Promise<void> {
    await this.signInButton.click();
  }

  public async signIn(email: string, password: string): Promise<void> {
    await this.fillCredentials(email, password);
    await this.goToAddressPage();
  }
}
