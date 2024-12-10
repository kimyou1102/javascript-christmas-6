import Badge from '../src/model/Badge.js';

describe('배지 클래스 테스트', () => {
  test('총혜택 금액이 5000원 미만이면 배지는 없다.', () => {
    const benefitsAmount = 4900;
    const badge = new Badge(benefitsAmount);
    expect(badge.getBadgeType()).toBe('없음');
  });

  test('총혜택 금액이 5000원 이상이면 별 배지를 부여받는다.', () => {
    const benefitsAmount = 5000;
    const badge = new Badge(benefitsAmount);
    expect(badge.getBadgeType()).toBe('별');
  });

  test('총혜택 금액이 10000원 이상이면 트리 배지를 부여받는다.', () => {
    const benefitsAmount = 10000;
    const badge = new Badge(benefitsAmount);
    expect(badge.getBadgeType()).toBe('트리');
  });

  test('총혜택 금액이 5000원 이상이면 산타 배지를 부여받는다.', () => {
    const benefitsAmount = 20000;
    const badge = new Badge(benefitsAmount);
    expect(badge.getBadgeType()).toBe('산타');
  });
});
