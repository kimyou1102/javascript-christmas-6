import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import { parseMenus } from '../utils/parseMenus.js';
import { menu } from '../constants/menu.js';
import Event from '../model/Event.js';

export default class Controller {
  async start() {
    OutputView.printGreeting();
    const visitDate = await InputView.readDate();
    const orderMenuInput = await InputView.readMenu();
    const orderMenus = parseMenus(orderMenuInput);
    OutputView.printMenu(orderMenus);

    const orderAmount = this.getSumOrderAmount(orderMenus);
    OutputView.printTotalOrderAmountBeforeDiscount(orderAmount);
    const event = new Event(orderAmount, visitDate, orderMenus);
    const eventResult = event.getTotalEventResult();
    OutputView.printPresentMenu(eventResult.isPresent);
    OutputView.printBenefitsDetails(eventResult);
  }

  getSumOrderAmount(orderMenus) {
    return orderMenus.reduce(
      (acc, orderMenu) => acc + menu[orderMenu.name].price * orderMenu.quantity,
      0,
    );
  }
}
