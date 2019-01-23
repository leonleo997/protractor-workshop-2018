import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';
export class ProductAddedModalPage {
  private proceedToCheckoutButton: ElementFinder;
  constructor () {
    this.proceedToCheckoutButton = $('[style*="display: block;"] .button-container > a');
  }
  public async goToCheckoutButton(): Promise <void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.proceedToCheckoutButton));
    await this.proceedToCheckoutButton.click();
  }
}
