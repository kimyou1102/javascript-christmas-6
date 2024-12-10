import { Console } from '@woowacourse/mission-utils';
import { OUT_MESSAGE } from '../constants/message.js';

const OutputView = {
  printMenu(menus) {
    Console.print(OUT_MESSAGE.ORDER);
    menus.forEach((menu) => {
      Console.print(`${menu.name} ${menu.quantity}개`);
    });
  },
  printTotalOrderAmountBeforeDiscount(moeny) {
    Console.print(OUT_MESSAGE.ORDER_AMOUNT_BEFORE_DISCOUNT);
    Console.print(`${moeny.toLocaleString('ko-KR')}원`);
  },
  printPresentMenu(isPresent) {
    Console.print(OUT_MESSAGE.PRESENT_MENU);
    if (isPresent) {
      Console.print('샴페인 1개');
      return;
    }
    Console.print('없음');
  },

  printBenefitsDetails(eventResult) {
    Console.print(OUT_MESSAGE.BENEFITS_DETAILS);
    const values = Object.values(eventResult);
    if (values.every((value) => value === 0 || value === false)) {
      Console.print('없음');
      return;
    }
    this.printBenefit(eventResult);
  },
  // eslint-disable-next-line max-lines-per-function
  printBenefit(eventResult) {
    const { christmasDiscount, weekdayDiscount, weekendDiscount, specialDiscount, isPresent } =
      eventResult;
    if (christmasDiscount > 0)
      Console.print(
        `${OUT_MESSAGE.CHRISTMAS_DISCOUNT} -${christmasDiscount.toLocaleString('ko-KR')}원`,
      );
    if (weekdayDiscount > 0)
      Console.print(
        `${OUT_MESSAGE.WEEKDAY_DISCOUNT} -${weekdayDiscount.toLocaleString('ko-KR')}원`,
      );
    if (weekendDiscount > 0)
      Console.print(
        `${OUT_MESSAGE.WEEKEND_DISCOUNT} -${weekendDiscount.toLocaleString('ko-KR')}원`,
      );
    if (specialDiscount > 0)
      Console.print(
        `${OUT_MESSAGE.SPECIAL_DISCOUNT}: -${specialDiscount.toLocaleString('ko-KR')}원`,
      );
    if (isPresent) Console.print(`증정 이벤트: 25,000원`);
  },
  printBenefitAmount(moeny) {
    Console.print(OUT_MESSAGE.TOTLA_BENEFIT);
    if (moeny === 0) {
      Console.print('0원');
      return;
    }
    Console.print(`-${moeny.toLocaleString('ko-KR')}원`);
  },
  printPaymentAmountAfterDiscount(totalMoeny, discountMoney) {
    Console.print(OUT_MESSAGE.PAYMENT_AMOUNT_AFTER_DISCOUNT);
    Console.print(`${(totalMoeny - discountMoney).toLocaleString('ko-KR')}원`);
  },
  printEventBadge(badge) {
    Console.print(OUT_MESSAGE.BADGE);
    Console.print(badge);
  },
  printGreeting() {
    Console.print(OUT_MESSAGE.GREETING);
  },
  printError(errorMessage) {
    Console.print(errorMessage);
  },
};

export default OutputView;
