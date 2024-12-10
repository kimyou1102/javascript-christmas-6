import { createError } from './createError.js';
import { menu } from '../constants/menu.js';
import { ERROR_MESSAGE } from '../constants/message.js';

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

export const validateDate = (dateInput) => {
  checkNumber(dateInput, ERROR_MESSAGE.DATE);
  const date = Number(dateInput);
  if (date < 1 || date > 31) {
    createError(ERROR_MESSAGE.DATE);
  }
};

const checkOnlyDrink = (menuNames) => {
  if (menuNames.every((name) => menu[name].type === '음료')) {
    createError(ERROR_MESSAGE.MENU);
  }
};

const checkDuplication = (menus) => {
  if (menus.length !== new Set(menus).size) {
    createError(ERROR_MESSAGE.MENU);
  }
};

const checkCount = (counts) => {
  if (counts.reduce((acc, count) => acc + count, 0) > 20) {
    createError(ERROR_MESSAGE.MENU);
  }
};

const hasSpecialSymbol = (productInput) => {
  if (productInput.replace(/[^,가-힣-0-9]/g, '').length !== productInput.length) {
    createError(ERROR_MESSAGE.MENU);
  }
};

const checkItem = (menu) => {
  checkItemEmpty(menu);
  const [name, quantity] = menu.split('-');

  checkMenuName(name, quantity);
  checkNumber(quantity, ERROR_MESSAGE.MENU);
  if (quantity < 1) createError(ERROR_MESSAGE.MENU);
};

const checkItemEmpty = (menu) => {
  if (menu === '') {
    createError(ERROR_MESSAGE.MENU);
  }
};

const checkMenuName = (name) => {
  if (!menu[name]) {
    createError(ERROR_MESSAGE.MENU);
  }
};

const checkNumber = (quantity, message) => {
  if (isNaN(quantity)) {
    createError(message);
  }
};
