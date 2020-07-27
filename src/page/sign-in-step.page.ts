import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private emailField: ElementFinder;
  private passwordField: ElementFinder;
  private signInButton: ElementFinder;

  constructor (){
    this.emailField = $('#email');
    this.passwordField = $('#passwd');
    this.signInButton = $('#SubmitLogin > span');
  }

  private async fillCredentials(email, password): Promise<void> {
    await this.emailField.sendKeys(email);
    await this.passwordField.sendKeys(password);
  }

  private async goToAddress(): Promise<void> {
    await this.signInButton.click();
  }

  public async signIn(email, password): Promise<void> {
    await this.fillCredentials(email, password);
    await this.goToAddress();
  }
}
