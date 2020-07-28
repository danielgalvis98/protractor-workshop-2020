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

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTshirtMenu();
    await productListPage.addShirtToCart();
    await productAddedModalPage.proccedToCheckout();
    await summaryStepPage.confirmAndCheckout();

    await signInStepPage.signIn('aperdomobo@gmail.com', 'WorkshopProtractor');

    await addresStepPage.goToShippingStep();

    await shippingStepPage.acceptTermsOfService();

    await shippingStepPage.goToPaymentMenu();
    await paymentStepPage.payByBankwire();
    await bankPaymentPage.confirmOrder();

    await expect(orderSummaryPage.getTitle())
      .toBe('Your order on My Store is complete.');
  });
});
