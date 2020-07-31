import { browser } from 'protractor';

describe('When open the registration page', () => {
  beforeAll(async () => {
    await (browser.get('https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm'));
  });
});
