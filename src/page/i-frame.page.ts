import { browser, promise, ElementFinder, element, by } from 'protractor';

export class IFramePage{
  private iframe1: ElementFinder;

  constructor() {
    this.iframe1 = element(by.id('frame1'));
  }

  public setFormFrameHeight(height: number): promise.Promise<void> {
    return browser.executeScript(`arguments[0].height = ${height};`, this.iframe1);
  }

  public async getFormFrameHeight(): Promise<number> {
    return Number(await this.iframe1.getAttribute('height'));
  }
}
