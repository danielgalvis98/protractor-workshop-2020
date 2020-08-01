import { browser } from 'protractor';
import { IFramePage } from '../src/page';

const newHeightFrame1: number = 1000;
describe('When open the ToolsQA practice page', () => {
  beforeAll(async () => {
    await browser.get('https://demoqa.com/frames');
  });
  describe('And changes height of first frame', () => {
    const iframePage: IFramePage = new IFramePage();
    beforeAll(async () => {
      await iframePage.setFormFrameHeight(newHeightFrame1);
    });
    it('Then the new height should be equal to the one we have set', async () => {
      await expect(await iframePage.getFormFrameHeight()).toBe(newHeightFrame1);
    });
  });
});
