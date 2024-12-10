export const parseMenus = (orderMenu) => {
  const menus = orderMenu.split(',');

  return menus.map((menu) => {
    const [name, quantity] = menu.split('-');
    return {
      name,
      quantity: Number(quantity),
    };
  });
};
