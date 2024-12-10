import Event from '../src/model/Event.js';

describe('이벤트 클래스 테스트', () => {
  test('크리스마스 디데이 할인 금액은 1일부터 날마다 100원씩 증가한다.', () => {
    const orderMenus = [
      { name: '티본스테이크', quantity: 1 },
      { name: '바비큐립', quantity: 1 },
      { name: '초코케이크', quantity: 2 },
      { name: '제로콜라', quantity: 1 },
    ];

    const event = new Event(3000, 25, orderMenus);
    expect(event.getChristmasDiscount()).toBe(3400);
  });

  test('크리스마스 디데이 할인은 25일이 지나면 해당되지 않는다.', () => {
    const orderMenus = [
      { name: '티본스테이크', quantity: 1 },
      { name: '바비큐립', quantity: 1 },
      { name: '초코케이크', quantity: 2 },
      { name: '제로콜라', quantity: 1 },
    ];

    const event = new Event(142000, 28, orderMenus);
    expect(event.getChristmasDiscount()).toBe(0);
  });

  test('평일에 디저트가 2개이면 디저트 개수 1개당 2023원 할인된다 ', () => {
    const orderMenus = [
      { name: '티본스테이크', quantity: 1 },
      { name: '바비큐립', quantity: 1 },
      { name: '초코케이크', quantity: 2 },
      { name: '제로콜라', quantity: 1 },
    ];

    const event = new Event(142000, 25, orderMenus);
    expect(event.getWeekdayDiscount()).toBe(4046);
  });

  test('평일에 디저트가 0개면 할인되지 않는다', () => {
    const orderMenus = [
      { name: '티본스테이크', quantity: 1 },
      { name: '바비큐립', quantity: 1 },
      { name: '제로콜라', quantity: 1 },
    ];

    const event = new Event(127000, 25, orderMenus);
    expect(event.getWeekdayDiscount()).toBe(0);
  });

  test('주말은 디저트가 있어도 할인되지 않는다', () => {
    const orderMenus = [
      { name: '티본스테이크', quantity: 1 },
      { name: '바비큐립', quantity: 1 },
      { name: '초코케이크', quantity: 2 },
      { name: '제로콜라', quantity: 1 },
    ];

    const event = new Event(142000, 29, orderMenus);
    expect(event.getWeekdayDiscount()).toBe(0);
  });

  test('주말에 메인이 1개면 개수 1개당 2023원 할인된다', () => {
    const orderMenus = [
      { name: '티본스테이크', quantity: 1 },
      { name: '초코케이크', quantity: 2 },
      { name: '제로콜라', quantity: 1 },
    ];

    const event = new Event(88000, 22, orderMenus);
    expect(event.getWeekendDiscount()).toBe(2023);
  });

  test('이벤트 달력에 별이 있는 날에 방문하면 1000원 할인된다.', () => {
    const orderMenus = [
      { name: '티본스테이크', quantity: 1 },
      { name: '초코케이크', quantity: 2 },
      { name: '제로콜라', quantity: 1 },
    ];

    const event = new Event(88000, 3, orderMenus);
    expect(event.getSpecialDiscount()).toBe(1000);
  });

  test('총주문 금액이 12만 원 이상일 때, 샴페인 1개 증정한다.', () => {
    const orderMenus = [
      { name: '티본스테이크', quantity: 1 },
      { name: '바비큐립', quantity: 1 },
      { name: '초코케이크', quantity: 2 },
      { name: '제로콜라', quantity: 1 },
    ];

    const event = new Event(120000, 25, orderMenus);
    expect(event.isPresent()).toBe(true);
  });

  test('총주문 금액이 12만 원 미만이면, 증정품이 없다.', () => {
    const orderMenus = [
      { name: '티본스테이크', quantity: 1 },
      { name: '초코케이크', quantity: 2 },
      { name: '제로콜라', quantity: 1 },
    ];

    const event = new Event(88000, 3, orderMenus);
    expect(event.isPresent()).toBe(false);
  });
});
