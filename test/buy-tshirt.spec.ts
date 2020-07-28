import { browser } from 'protractor';
import { MenuContentPage, ProductListPage, ProductAddedModalPage, OrderSummaryPage,
  SignInStepPage, AddresStepPage, ShippingStepPage, PaymentStepPage,
  BankPaymentPage,
  SummaryStepPage} from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addresStepPage: AddresStepPage = new AddresStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(10000));
    await menuContentPage.goToTshirtMenu();
    await(browser.sleep(3000));
    await productListPage.addShirtToCart();
    await(browser.sleep(3000));
    await productAddedModalPage.proccedToCheckout();
    await(browser.sleep(3000));
    await summaryStepPage.confirmAndCheckout();
    await(browser.sleep(3000));

    await signInStepPage.signIn('aperdomobo@gmail.com', 'WorkshopProtractor');
    await(browser.sleep(3000));

    await addresStepPage.goToShippingStep();
    await(browser.sleep(3000));

    await shippingStepPage.acceptTermsOfService();
    await(browser.sleep(3000));

    await shippingStepPage.goToPaymentMenu();
    await(browser.sleep(3000));
    await paymentStepPage.payByBankwire();
    await(browser.sleep(3000));
    await bankPaymentPage.confirmOrder();
    await(browser.sleep(3000));

    await expect(orderSummaryPage.getTitle())
      .toBe('Your order on My Store is complete.');
  });
});
