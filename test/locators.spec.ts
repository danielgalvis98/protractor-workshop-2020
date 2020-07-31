import { browser, } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('When open the registration page', () => {
  beforeAll(async () => {
    await browser.get('https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm');
  });

  describe('And fill the form of personal information', async() => {
    const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();
    beforeAll(async () => {
      await personalInformationPage.fillForm({
        firstName: 'Alejandro',
        lastName: 'Perdomo',
        sex: 'Male',
        experience: 7,
        profession: ['Automation Tester'],
        tools: ['Selenium Webdriver'],
        continent: 'South America',
        commands: [
          'Browser Commands',
          'Navigation Commands',
          'Switch Commands',
          'Wait Commands',
          'WebElement Commands']
      });
      await personalInformationPage.manageAlert();
    });
    it('Then sould wooork', async () => {
      await expect(personalInformationPage.getTitle()).toBe('Selenium - Automation Practice Form - Tutorialspoint');
    });
  });
});
