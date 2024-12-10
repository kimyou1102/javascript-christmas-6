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
  printBenefitsDetails(eventResult) {
    const { christmasDiscount, weekdayDiscount, weekendDiscount, specialDiscount, isPresent } =
      eventResult;
    Console.print('\n<혜택 내역>');
    const values = Object.values(eventResult);
    if (values.every((value) => value === 0 && value === false)) {
      Console.print('없음');
      return;
    }
    if (christmasDiscount > 0) Console.print(`크리스마스 디데이 할인: -${christmasDiscount} 원`);
    if (weekdayDiscount > 0) Console.print(`평일 할인: -${weekdayDiscount} 원`);
    if (weekendDiscount > 0) Console.print(`주말 할인: -${weekendDiscount} 원`);
    if (specialDiscount > 0) Console.print(`특별 할인: -${specialDiscount} 원`);
    if (isPresent) Console.print(`증정 이벤트: 25,000 원`);
  },
  printGreeting() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },
};

export default OutputView;
