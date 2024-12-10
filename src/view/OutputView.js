import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printMenu(menus) {
    Console.print('\n<주문 메뉴>');
    menus.forEach((menu) => {
      Console.print(`${menu.name} ${menu.quantity}개`);
    });
  },
  printTotalOrderAmountBeforeDiscount(moeny) {
    Console.print('\n<할인 전 총주문 금액>');
    Console.print(`${moeny.toLocaleString('ko-KR')} 원`);
  },
  printPresentMenu(isPresent) {
    Console.print('\n<증정 메뉴>');
    if (isPresent) {
      Console.print('샴페인 1개');
      return;
    }
    Console.print('없음');
  },
  // eslint-disable-next-line max-lines-per-function
  printBenefitsDetails(eventResult) {
    const { christmasDiscount, weekdayDiscount, weekendDiscount, specialDiscount, isPresent } =
      eventResult;
    Console.print('\n<혜택 내역>');
    const values = Object.values(eventResult);
    if (values.every((value) => value === 0 || value === false)) {
      Console.print('없음');
      return;
    }
    if (christmasDiscount > 0)
      Console.print(`크리스마스 디데이 할인: -${christmasDiscount.toLocaleString('ko-KR')} 원`);
    if (weekdayDiscount > 0)
      Console.print(`평일 할인: -${weekdayDiscount.toLocaleString('ko-KR')} 원`);
    if (weekendDiscount > 0)
      Console.print(`주말 할인: -${weekendDiscount.toLocaleString('ko-KR')} 원`);
    if (specialDiscount > 0)
      Console.print(`특별 할인: -${specialDiscount.toLocaleString('ko-KR')} 원`);
    if (isPresent) Console.print(`증정 이벤트: 25,000 원`);
  },
  printBenefitAmount(moeny) {
    Console.print('\n<총혜택 금액>');
    Console.print(`-${moeny.toLocaleString('ko-KR')} 원`);
  },
  printPaymentAmountAfterDiscount(totalMoeny, discountMoney) {
    Console.print('\n<할인 후 예상 결제 금액>');
    Console.print(`${(totalMoeny - discountMoney).toLocaleString('ko-KR')} 원`);
  },
  printEventBadge(badge) {
    Console.print('\n<12월 이벤트 배지>');
    Console.print(badge);
  },
  printGreeting() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },
  printError(errorMessage) {
    Console.print(errorMessage);
  },
};

export default OutputView;
