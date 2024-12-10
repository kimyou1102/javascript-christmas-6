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
  printGreeting() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },
};

export default OutputView;
