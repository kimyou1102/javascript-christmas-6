import { weekday } from '../constants/eventDay.js';
import { menu } from '../constants/menu.js';

export default class Event {
  constructor(totalMoney, date, orderMenus) {
    this.totalMoney = totalMoney;
    this.date = date;
    this.orderMenus = orderMenus;
  }

  getChristmasDiscount() {
    if (this.date > 26) return 0;
    const START_MONEY = 1000;
    return START_MONEY + (this.date - 1) * 100;
  }
}
