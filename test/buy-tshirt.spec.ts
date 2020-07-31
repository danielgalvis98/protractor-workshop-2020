import { browser } from 'protractor';
import { MenuContentPage, ProductListPage, ProductAddedModalPage, OrderSummaryPage,
  SignInStepPage, AddresStepPage, ShippingStepPage, PaymentStepPage,
  BankPaymentPage,
  SummaryStepPage} from '../src/page';

describe('When open the store page', () => {

  beforeAll(async () => {
    await browser.get('http://automationpractice.com/');
  });

  describe('And starts the process of buying a shirt', async () => {
    beforeAll(async () => {
      const menuContentPage: MenuContentPage = new MenuContentPage();
      const productListPage: ProductListPage = new ProductListPage();
      const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
      const summaryStepPage: SummaryStepPage = new SummaryStepPage();
      const products: string[] = ['Faded Short Sleeve T-shirts'];

      await menuContentPage.goToTshirtMenu();
      await productListPage.selectProduct(products[0]);
      await productAddedModalPage.proccedToCheckout();
      await summaryStepPage.confirmAndCheckout();
    });

    describe('And sign in to the application', async () => {
      beforeAll(async () => {
        const signInStepPage: SignInStepPage = new SignInStepPage();
        await signInStepPage.signIn('aperdomobo@gmail.com', 'WorkshopProtractor');
      });

      describe('And selects default Address', async () => {
        beforeAll(async () => {
          const addresStepPage: AddresStepPage = new AddresStepPage();
          await addresStepPage.goToShippingStep();
        });

        describe('And pays in the bank', async () => {
          beforeAll(async () => {
            const shippingStepPage: ShippingStepPage = new ShippingStepPage();
            const paymentStepPage: PaymentStepPage = new PaymentStepPage();
            const bankPaymentPage: BankPaymentPage = new BankPaymentPage();

            await shippingStepPage.acceptTermsOfService();
            await shippingStepPage.goToPaymentMenu();
            await paymentStepPage.payByBankwire();
            await bankPaymentPage.confirmOrder();

          });

          it('then the order should be completed and confirmed', async () => {
            const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
            await expect(orderSummaryPage.getTitle()).toBe('Your order on My Store is complete.');
          });
        });
      });
    });

  });

});
