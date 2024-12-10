import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import { parseMenus } from '../utils/parseMenus.js';
import { menu } from '../constants/menu.js';

export default class Controller {
  async start() {
    OutputView.printGreeting();
    const visitDate = await InputView.readDate();
    const orderMenu = await InputView.readMenu();
    const menu = parseMenus(orderMenu);
    OutputView.printMenu(menu);

    const orderAmount = this.getSumOrderAmount(menu);
    OutputView.printTotalOrderAmountBeforeDiscount(orderAmount);
  }

  getSumOrderAmount(orderMenus) {
    return orderMenus.reduce(
      (acc, orderMenu) => acc + menu[orderMenu.name].price * orderMenu.quantity,
      0,
    );
  }
}
