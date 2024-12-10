import { validateMenuInput } from '../src/utils/validation.js';

describe('메뉴 입력 예외 테스트', () => {
  test.each([
    '시저샐러드,,',
    '커피-2',
    '제로콜라-2,제로콜라-2',
    '제로콜라-한개',
    '제로콜라-2,샴페인-1',
    '제로콜라-0',
    '시저샐러드-1, 티본스테이크-1, 크리스마스파스타-1, 제로콜라-13, 아이스크림-1의 총개수는 7개',
  ])('메뉴 입력이 %s 인 경우 에러가 발생한다.', (input) => {
    expect(() => validateMenuInput(input)).toThrow('유효하지 않은 주문입니다. 다시 입력해 주세요');
  });
});
