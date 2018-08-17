const arrayList = ['name', 'budget', 'goods', 'items', 'employers', 'discount', 'isopen'];
const arrayList5 = ['choose-item', 'time-value', 'count-budget-value'];
// step 1
console.log('--- step 1 ---');
let open = document.getElementById('open-btn');
console.log(open);

// step 2
console.log('--- step 2 ---');
const step2arr = arrayList.map(function(item, index = 0) {
    let res = [];
    let resItem = {};
    // if (item !== 'discount' && item !== 'isopen') {
        console.log(document.querySelector(`.${item}-value`));
        resItem.className = `${item}-value`;
        resItem.selector = document.querySelector(`.${item}-value`);
        res.push(resItem);
        return res;
    // }
});
console.log(step2arr);
let getDomNode = function (arr, str) {
    let selector;
    console.log(arr);
    arr.forEach((el)=>{
        let obj = el[0];
        if (obj.className === str) {
            return selector = obj.selector;
        }
    });
    console.log(selector);
    return selector;
};


// step 3
console.log('--- step 3 ---');
let step3arr = document.querySelectorAll('.goods-item');
// step3arr.forEach((item) => {
//     console.log(item);
// });
let setInputDefaultValue = function (arr, arrStr) {
    if (arr.length <= arrStr.length) {
        arr.forEach((item, index) => {
            item.value = arrStr[index];
            item.addEventListener('change', function () {
               console.log(this.value);
            });
        });
    }
};

// step 4
console.log('--- step 4 ---');
let form = document.querySelector('.main-functions');
let elements = form.getElementsByTagName('button');
let getButtonDomNode = function (arr, className) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].className === className) {
            let buttons = elements[i];
            return buttons;
        }
    }
};


// step 5
console.log('--- step 5 ---');
arrayList5.forEach((el)=>{
    console.log(document.querySelector(`.${el}`));
});
// step 6
console.log('--- step 6 ---');
let employers = document.querySelectorAll('.hire-employers-item');
for (let i = 0; i < employers.length; i++) {
    console.log(employers[i]);
}
//================================================================
Date.prototype.getNumberOfDaysInMonth = function (monthOffset) {
    if (monthOffset !== undefined) {
        return new Date(this.getFullYear(), this.getMonth() + monthOffset, 0).getDate();
    } else {
        return new Date(this.getFullYear(), this.getMonth(), 0).getDate();
    }
};

const daysInMonth = (month, year) => {
    let days;
    switch (month) {
        case 1: // Feb, our problem child
            let leapYear = (
                (year % 4 == 0) &&
                (year % 100 != 0)) ||
                (year % 400 == 0);
            days = leapYear ? 29 : 28;
            break;
        case 3:
        case 5:
        case 8:
        case 10:
            days = 30;
            break;
        default:
            days = 31;
    }
    return days;
};
let date = {
    getCountDaysInMouth: () => {
        let curDate = new Date();
        return daysInMonth(curDate.getMonth(), curDate.getFullYear());
        /*
            Или используя протопип:
            return new Date().getNumberOfDaysInMonth();
        */
    },
    getHoursInDay: () => {
        return new Date().getHours();
    }
};

let budget,
    budgetForDay,
    price;

let categoryList = [
    'Apple',
    'Samsung',
    'Xiaomi',
    'Meizu'
];

let mainList = {
    init: function () {
        this.setBudget();
        this.setBudgetForDay();
        this.setShopName();
        this.setShopGoods();
        this.setEmployers();
        this.setShopItems();
        this.getWorkTime();
        this.getPriceCalc();
    },
    budget: budget,
    budgetForDay: budgetForDay,
    shopName: '',
    shopGoods: [],
    employers: [],
    open: false,
    discount: true,
    price: price,
    shopItems: [],
    date: date,
    defautProps: {
        shopGoods: {
            use: true,
            data: categoryList
        },
        shopItems: {
            use: true,
            data: [
                {
                    category: 'Apple',
                    item: 'iPhone X',
                    price: 36499
                },
                {
                    category: 'Apple',
                    item: 'iPhone 8',
                    price: 21999
                },
                {
                    category: 'Apple',
                    item: 'iPhone 7',
                    price: 15999
                },
                {
                    category: 'Samsung',
                    item: 'Galaxy J6',
                    price: 5999
                },
                {
                    category: 'Samsung',
                    item: 'Galaxy A6+',
                    price: 9999
                },
                {
                    category: 'Samsung',
                    item: 'Galaxy A8',
                    price: 17999
                },
                {
                    category: 'Xiaomi',
                    item: 'Redmi S2',
                    price: 4799
                },
                {
                    category: 'Xiaomi',
                    item: 'Redmi Note 5',
                    price: 5999
                },
                {
                    category: 'Xiaomi',
                    item: 'Redmi 5',
                    price: 3899
                },
            ]
        }
    },

    setBudget: function (str = 'Ваш бюджет на месяц?', defaultValue = 45000) {
        let budgetPrompt = parseFloat(prompt(str, defaultValue));
        if (!isNaN(budgetPrompt)) {
            this.budget = budgetPrompt;
            return this.budget;
        } else {
            this.setBudget();
        }
        // Или посредством тернарного оператора:
        // return (!isNaN(budgetPrompt)) ? this.budget = budgetPrompt : this.setBudget();
    },

    setBudgetForDay: function (days = date.getCountDaysInMouth()) {
        if (!isNaN(this.budget)) {
            this.budgetForDay = parseFloat((this.budget / days).toFixed(2));
            return this.budgetForDay;
        } else {
            this.setBudget();
            this.setBudgetForDay();
            return this.budgetForDay;
        }

        // Или посредством тернарного оператора:
        // return (!isNaN(this.budget)) ? (
        //     this.budgetForDay = parseFloat((this.budget / days).toFixed(2)),
        //     this.budgetForDay) : (
        //     this.setBudget(),
        //     this.setBudgetForDay(),
        //     this.budgetForDay
        // );
    },

    setShopName: function (str = 'Название вашего магазина?', defaultValue = 'Aclon') {
        let shopNamePrompt = prompt(str, defaultValue);
        if (shopNamePrompt != '' && shopNamePrompt !== null) {
            this.shopName = shopNamePrompt;
            return this.shopName;
        } else {
            this.setShopName();
        }
        // Или посредством тернарного оператора:
        // return (shopNamePrompt != '' && shopNamePrompt !== null) ? shopNamePrompt : this.setShopName();
    },

    setShopGoods: function (str = 'Какой тип товаров будем продавать?', count = 3) {
        if (!this.defautProps.shopGoods.use) {
            let res = this.shopGoods;
            let i = res.length;

            while (i < count) {
                let question = prompt(str);

                if (question !== null && question != '' && (question.replace(/\s/g, '') != '')) {
                    res.push(question);
                    i++;
                }
            }
            this.shopGoods = res;
            return this.shopGoods.sort();
        } else {
            this.shopGoods = this.defautProps.shopGoods.data;
            return this.shopGoods;
        }
    },

    setEmployers: function (str = 'Введите имя сотрудника: ', count = 4) {
        let res = this.employers;
        let i = res.length;

        while (i < count) {
            let emploersObj = {};
            let namePerson = prompt(str);

            if (namePerson !== null && namePerson != '' && (namePerson.replace(/\s/g, '') != '')) {
                emploersObj.no = i + 1;
                emploersObj.name = namePerson;
                res.push(emploersObj);
                i++;
            }
        }
        this.employers = res;
        return this.employers.sort();
    },

    getWorkTime: function (time = this.date.getHoursInDay()) {
        // let time = date.getHoursInDay();
        if (time < 0) {
            console.log('Такого не может быть');
        } else if (time > 8 && time < 20) {
            console.log('Рабочее время магазина');
            this.open = true;
            return this.open;
        } else if (time < 24) {
            console.log('Уже слишком поздно');
            this.open = false;
            return this.open;
        } else {
            console.log('В сутках только 24 часа');
        }
    },

    getPriceCalc: function (price = 25000) {
        console.log(this.discount);
        if (!this.discount) {
            this.price = price;
            return this.price
        } else {
            this.price = (price * 80) / 100;
            return this.price;
        }
        // Или посредством тернарного оператора:
        // return (!this.discount) ?
        //     (this.price = price, this.price) :
        //     (this.price = (price * 80) / 100, this.price);
    },

    setShopItems: function (str = 'Товары через запятую', str2 = 'Погодите, добавьте еще') {
        if (!this.defautProps.shopItems.use) {
            let items = prompt(str, '');
            if (items != '' && items !== null) {
                this.shopItems = items.split(',');
                let addAnother = prompt(str2, '');
                if (addAnother != '' && addAnother !== null) {
                    this.shopItems.push(addAnother);
                } else { return addAnother}
                this.shopItems.sort();
            } else {
                this.setShopItems();
            }
        } else {
            this.shopItems = this.defautProps.shopItems.data
            return this.shopItems;
        }
    },
};


let dayFour = (obj = mainList) => {
    let arr1 = obj.shopItems;
    let str1 = 'Список товаров:';
    let str2 = 'Методы и свойства магазина:';

    let consoleFunction_1 = (str, arr) => {
        if (!mainList.defautProps.shopItems.use) {
            console.log(str);
            arr.forEach(function (item, i = 0) {
                console.log(`${(++i)}: ${item}`);
            });
        } else {
            console.log(str);
            arr.forEach(function (item, i = 0) {
                console.log(`${(++i)}:`);
                for (const key in item) {
                    console.log(`${key}:${item[key]}`);
                }
            });
        }
    };

    let consoleFunction_2 = (str = str2) => {
        console.log(str);
        let i = 0;
        for (let key in obj) {
            console.log(`${++i}: ${key}`);
        }
    };

    consoleFunction_2();
    consoleFunction_1(str1, arr1);
};
//==============================
// EventListeners

let elementsDom = {
    openShop: open,
    goodsItemBtn: getButtonDomNode(elements, 'goods-item-btn'),
    countBudgetBtn: getButtonDomNode(elements, 'count-budget-btn'),
};

elementsDom.openShop.addEventListener('click', (e, obj = mainList)=>{
    e.preventDefault();
    getDomNode(step2arr, 'name-value').textContent = obj.setShopName();
    getDomNode(step2arr, 'budget-value').textContent = obj.setBudget();
    setInputDefaultValue(step3arr, obj.setShopGoods());
    e.target.setAttribute('disabled', 'disabled');
});

elementsDom.goodsItemBtn.addEventListener('click', (e, obj = mainList)=>{
    e.preventDefault();
    getDomNode(step2arr, 'goods-value').textContent = obj.shopGoods.toString();
});

elementsDom.countBudgetBtn.addEventListener('click', (e)=>{

});