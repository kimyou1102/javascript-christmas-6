export default class Badge {
  #benefitsAmount;

  constructor(benefitsAmount) {
    this.#benefitsAmount = benefitsAmount;
  }

  getBadgeType() {
    if (this.#benefitsAmount < 5000) return '없음';
    if (this.#benefitsAmount >= 20000) return '산타';
    if (this.#benefitsAmount >= 10000) return '트리';
    if (this.#benefitsAmount >= 5000) return '별';
  }
}
