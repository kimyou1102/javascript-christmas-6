import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import { parseMenus } from '../utils/parseMenus.js';

export default class Controller {
  async start() {
    OutputView.printGreeting();
    const visitDate = await InputView.readDate();
    const orderMenu = await InputView.readMenu();
    const menu = parseMenus(orderMenu);
  }
}
