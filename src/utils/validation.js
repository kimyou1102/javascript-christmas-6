import { createError } from './createError.js';
import { menu } from '../constants/menu.js';

const MENU = '유효하지 않은 주문입니다. 다시 입력해 주세요';

export const validateMenuInput = (menusInput) => {
  hasSpecialSymbol(menusInput);
  const menus = menusInput.split(',');
  menus.forEach((menu) => checkItem(menu));
  const menuNames = menus.map((manu) => manu.split('-')[0]);
  const counts = menus.map((manu) => Number(manu.split('-')[1]));
  checkDuplication(menuNames);
  checkOnlyDrink(menuNames);
  checkCount(counts);
};

const checkOnlyDrink = (menuNames) => {
  if (menuNames.every((name) => menu[name].type === '음료')) {
    createError(MENU);
  }
};

const checkDuplication = (menus) => {
  if (menus.length !== new Set(menus).size) {
    createError(MENU);
  }
};

const checkCount = (counts) => {
  if (counts.reduce((acc, count) => acc + count, 0) > 20) {
    createError(MENU);
  }
};

const hasSpecialSymbol = (productInput) => {
  if (productInput.replace(/[^,가-힣-0-9]/g, '').length !== productInput.length) {
    createError(MENU);
  }
};

const checkItem = (menu) => {
  checkItemEmpty(menu);
  const [name, quantity] = menu.split('-');

  checkMenuName(name, quantity);
  checkQuantity(quantity);
  if (quantity < 1) createError(MENU);
};

const checkItemEmpty = (menu) => {
  if (menu === '') {
    createError(MENU);
  }
};

const checkMenuName = (name) => {
  if (!menu[name]) {
    createError(MENU);
  }
};

const checkQuantity = (quantity) => {
  if (isNaN(quantity)) {
    createError(MENU);
  }
};
