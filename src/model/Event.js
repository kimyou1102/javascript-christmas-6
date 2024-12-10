import { weekday, eventDay } from '../constants/eventDay.js';
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

  getWeekdayDiscount() {
    if (!weekday.includes(this.date)) return 0;

    const WEEKDAY_DISCOUNT_MONEY = 2023;
    let discount = 0;
    this.orderMenus.forEach(({ name, quantity }) => {
      if (menu[name].type === '디저트') {
        discount += WEEKDAY_DISCOUNT_MONEY * quantity;
      }
    });

    return discount;
  }

  getWeekendDiscount() {
    if (weekday.includes(this.date)) return 0;
    const WEEKEND_DISCOUNT_MONEY = 2023;
    let discount = 0;
    this.orderMenus.forEach(({ name, quantity }) => {
      if (menu[name].type === '메인') {
        discount += WEEKEND_DISCOUNT_MONEY * quantity;
      }
    });

    return discount;
  }

  getSpecialDiscount() {
    if (!eventDay.includes(this.date)) return 0;
    return 1000;
  }

  isPresent() {
    if (this.totalMoney >= 120000) return true;
    return false;
  }
}
