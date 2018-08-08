let budget = function () {
  return prompt('Ваш бюджет на месяц?');
};

let marketName = function () {
    return prompt('Название вашего магазина?');
};

let shopGoods = function (str = 'Какой тип товаров будем продавать?') {
    return res = [
        prompt(str, ''),
        prompt(str, ''),
        prompt(str, ''),
    ];
};

let employers = [
    {
        name: 'Vova iz Lvova',
        position: 'director',
    },
    {
        name: 'Alesh Popovich',
        position: 'seller',
    },
];

let open = true;

let mainList = {
    budget: budget(),
    budgetForDay: function () {
      return this.budget / 30;
    },
    marketName: marketName(),
    shopGoods: shopGoods(),
    employers: employers,
    open: open
};

console.log(`
${mainList.budget}
${mainList.marketName}
${mainList.shopGoods}
Мой бюджет на 1 день: ${mainList.budgetForDay()}
`);