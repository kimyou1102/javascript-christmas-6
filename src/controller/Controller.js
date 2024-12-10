import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

import Event from '../model/Event.js';
import Badge from '../model/Badge.js';

import { parseMenus } from '../utils/parseMenus.js';
import { menu } from '../constants/menu.js';
import { validateMenuInput, validateDate } from '../utils/validation.js';

export default class Controller {
  // eslint-disable-next-line max-lines-per-function
  async start() {
    OutputView.printGreeting();
    const visitDate = await this.getValidatedInputWithRetry(InputView.readDate, validateDate);
    const orderMenuInput = await this.getValidatedInputWithRetry(
      InputView.readMenu,
      validateMenuInput,
    );
    const orderMenus = parseMenus(orderMenuInput);
    OutputView.printMenu(orderMenus);

    const orderAmount = this.getSumOrderAmount(orderMenus);
    OutputView.printTotalOrderAmountBeforeDiscount(orderAmount);
    const event = new Event(orderAmount, visitDate, orderMenus);
    const eventResult = event.getTotalEventResult();
    OutputView.printPresentMenu(eventResult.isPresent);
    OutputView.printBenefitsDetails(eventResult);
    const totalBenefitMoneyWithPresent = this.getTotalBenefitMoneyWithPresent(eventResult);
    OutputView.printBenefitAmount(totalBenefitMoneyWithPresent);
    OutputView.printPaymentAmountAfterDiscount(orderAmount, this.getTotalBenefitMoney(eventResult));
    const badge = new Badge(totalBenefitMoneyWithPresent);
    OutputView.printEventBadge(badge.getBadgeType());
  }

  getTotalBenefitMoney(eventResult) {
    const { isPresent, ...restResult } = eventResult;
    const discountMoneys = Object.values(restResult);
    return discountMoneys.reduce((acc, money) => acc + money, 0);
  }

  getTotalBenefitMoneyWithPresent(eventResult) {
    const sumDiscountMoney = this.getTotalBenefitMoney(eventResult);
    let presentMoeny = 0;
    if (eventResult.isPresent) presentMoeny = 25000;
    return sumDiscountMoney + presentMoeny;
  }

  getSumOrderAmount(orderMenus) {
    return orderMenus.reduce(
      (acc, orderMenu) => acc + menu[orderMenu.name].price * orderMenu.quantity,
      0,
    );
  }

  async getValidatedInputWithRetry(getInput, validate) {
    try {
      const input = await getInput();
      validate(input);
      return input;
    } catch (error) {
      OutputView.printError(error.message);
      return await this.getValidatedInputWithRetry(getInput, validate);
    }
  }
}
