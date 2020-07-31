import { ElementFinder, ElementArrayFinder, element, by, browser, ExpectedConditions } from 'protractor';

export class PersonalInformationPage {
  private firstNameInput: ElementFinder;
  private lastNameInput: ElementFinder;
  private sexOptions: ElementArrayFinder;
  private yearsOfExperienceOptions: ElementArrayFinder;
  private dateInput: ElementFinder;
  private professionOptions: ElementArrayFinder;
  private seleniumTools: ElementArrayFinder;
  private continents: ElementFinder;
  private seleniumCommands: ElementFinder;
  private button: ElementFinder;

  private selectInput(labelName: string): ElementFinder {
    return element.all(by.tagName('tr')).filter(async (elem) => {
      const labelValue: string = await elem.element(by.tagName('span')).getText();
      return labelValue.startsWith(labelName);
    }).first().element(by.tagName('input'));
  }

  constructor() {
    this.firstNameInput = element(by.name('firstname'));
    this.lastNameInput = element(by.name('lastname'));
    this.sexOptions = element.all(by.name('sex'));
    this.yearsOfExperienceOptions = element.all(by.name('exp'));
    this.dateInput = this.selectInput('Date:');
    this.professionOptions = element.all(by.name('profession'));
    this.seleniumTools = element.all(by.name('tool'));
    this.continents = element(by.name('continents'));
    this.seleniumCommands = element(by.name('selenium_commands'));
    this.button = element(by.name('submit'));
  }

  private async selectRadioButton (
    desiredOption: string, options: ElementArrayFinder): Promise<void> {
    await options.filter(async (elem) => {
      const value = await elem.getAttribute('value');
      return value === desiredOption;
    }).first().click();
  }

  private async selectAllCheckBoxs (
    desiredOptions: string[], options: ElementArrayFinder): Promise<void> {
    const optionsToSelect: ElementFinder[] = await options.filter(async (elem) => {
      const value = await elem.getAttribute('value');
      return desiredOptions.includes(value);
    });
    optionsToSelect.forEach(async (elem) => {
      await elem.click();
    });
  }

  private async selectContinent(desiredContinent: string): Promise<void> {
    const selectedContinent: ElementFinder = await this.continents.element(
      by.cssContainingText('option', desiredContinent));
    await selectedContinent.click();
  }

  private async selectSeleniumComands(desiredComands: string[]): Promise<void> {
    desiredComands.forEach(async (comandName) => {
      const comandObject: ElementFinder = await this.seleniumCommands.element(
        by.cssContainingText('option', comandName)
      );
      await comandObject.click();
    });
  }

  public async fillForm(fillValues): Promise<void> {
    this.dateInput;
    await this.firstNameInput.sendKeys(fillValues.firstName);
    await this.lastNameInput.sendKeys(fillValues.lastName);
    await this.selectRadioButton(fillValues.sex, this.sexOptions);
    await this.selectRadioButton(fillValues.experience.toString(), this.yearsOfExperienceOptions);
    await this.selectAllCheckBoxs(fillValues.profession, this.professionOptions);
    await this.selectAllCheckBoxs(fillValues.tools, this.seleniumTools);
    await this.selectSeleniumComands(fillValues.commands);
    await this.selectContinent(fillValues.continent);
    await this.button.click();
  }

  public async manageAlert(): Promise<void> {
    await browser.wait(ExpectedConditions.alertIsPresent(), 10000);
    const alert = await browser.switchTo().alert();
    await alert.accept();
  }

  public async getTitle(): Promise<string> {
    return await browser.getTitle();
  }

}
