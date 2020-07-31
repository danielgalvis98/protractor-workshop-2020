import { ElementFinder, ElementArrayFinder, element, by } from "protractor";

export class ProductAddedModalPage {
  private firstNameInput: ElementFinder;
  private lastNameInput: ElementFinder;
  private sexOptions: ElementArrayFinder;
  private yearsOfExperienceOptions: ElementArrayFinder;
  private dateInput: ElementFinder;
  private professionOptions: ElementArrayFinder;
  private seleniumTools: ElementArrayFinder;
  private continent: ElementFinder;
  private seleniumCommands: ElementFinder;
  private button: ElementFinder;

  private selectInput(labelName: string): ElementFinder {
    return element.all(by.tagName('tr')).filter(async (elem) => {
      const labelValue: string = await elem.element(by.tagName('span')).getText();
      return labelValue.startsWith(labelName);
    }).first().element(by.tagName('input'));
  }

  constructor() {
    this.firstNameInput = element(by.name('firstName'));
    this.lastNameInput = element(by.name('lastname'));
    this.sexOptions = element.all(by.name('sex'));
    this.yearsOfExperienceOptions = element.all(by.name('exp'));
    this.dateInput = this.selectInput('Date:');
    this.professionOptions = element.all(by.name('profession'));
    this.seleniumTools = element.all(by.name('tool'));
    this.continent = element(by.name('continents'));
    this.seleniumCommands = element(by.name('selenium_commands'));
    this.button = element(by.name('submit'));
  }

}
