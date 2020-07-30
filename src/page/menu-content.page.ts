import { $, ElementFinder } from 'protractor';

export class MenuContentPage {
  private tShirtMenu: ElementFinder;

  constructor () {
    /* Letting the elemented be selected by the position in the list can be very risky as it could
     change if another element is added or deleted from the list. I also consider that it would be
     good to use a diferent selector to the div than te id 'block_top_menu' because if it changes
     from place (at the side for example), there is a probability that the id changes too,
     breaking the test. But, with the given conditions, I think this is the best way to do it */
    this.tShirtMenu = $('#block_top_menu > ul > li > a[title=T-shirts]');
  }

  public async goToTshirtMenu(): Promise<void> {
    await this.tShirtMenu.click();
  }
}
