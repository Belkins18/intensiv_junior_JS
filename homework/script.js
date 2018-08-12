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
/*
    Функция budget()
    Задача: Запросить у пользователя информацию о доступном бюджете
            Вернуть значение бюджета, предварительно проверив что результат
            функции не NaN!

            Принимает 2 параметра:
                str - вопрос для prompt(), и
                defaultValue - значение что будет подставляться в строуку по умолчанию

    подробнее про Prompt() => https://learn.javascript.ru/uibasic
*/
let budget = (str = 'Ваш бюджет на месяц?', defaultValue = 45000) => {
    /*  В переменную budgetPrompt записываем результат функции prompt(),
        после чего прогоняем полученный результат через parseFloat();

        Делаем проверку на isNaN() https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/isNaN
        Если не isNan => возвращаем результат переменной budgetPrompt
        Иначе делаем рекурсию и повторно вызываем budget();
    */
    let budgetPrompt = parseFloat(prompt(str, defaultValue));
    return (!isNaN(budgetPrompt)) ? budgetPrompt : budget();
};
//--------
/*
    Функция marketName()
    Задача: Запросить у пользователя информацию о названии вашего магазина
            Вернуть название если пользователь не нажал "Отмена"
            (вернет null), или поле было не заполнено,
            иначе делаем рекурсию и повторно вызываем marketName();

            Принимает 2 параметра:
                str - вопрос для prompt(), и
                defaultValue - значение что будет подставляться в строку по умолчанию
*/
let marketName = function (str = 'Название вашего магазина?', defaultValue = 'Aclon') {
    let marketNamePrompt = prompt(str, defaultValue);
    return (marketNamePrompt != '' && marketNamePrompt !== null) ? marketNamePrompt : marketName();
};
//--------
/*
    Функция budget()
    Задача: Запросить у пользователя информацию о доступном бюджете
            Вернуть значение бюджета, предварительно проверив что результат
            функции не NaN!

            Принимает 2 параметра:
                str - вопрос для prompt(), и
                defaultValue - значение что будет подставляться в строуку по умолчанию


    подробнее про Prompt() => https://learn.javascript.ru/uibasic
*/
let shopGoods = (str = 'Какой тип товаров будем продавать?', count = 3) => {
    let res = [];
    let i = res.length;

    while (i < count) {
        let question = prompt(str);

        if (question !== null && question != '' && (question.replace(/\s/g,'')!='')) {
            res.push(question);
            i++;
        }
    }

    // for (let i = 0; i < count; i++) {
    //     let question = prompt(str);
    //
    //     if (question !== null && question != '' && (question.replace(/\s/g,'')!='')) {
    //         cur[i] = question;
    //         res.push(cur[i]);
    //     } else {
    //         i = i - 1;
    //     }
    // }
    return res;
};
//--------
let employers = (str = 'Введите имя сотрудника: ', count = 4) => {
    let res = [];
    let i = res.length;

    while (i < count) {
        let emploersObj = {};
        let nemePerson = prompt(str);

        if (nemePerson !== null && nemePerson != '' && (nemePerson.replace(/\s/g,'')!='')) {
            emploersObj.no = i + 1;
            emploersObj.name = nemePerson;
            res.push(emploersObj);
            i++;
        }
    }
    return res;
};

let mainList = {
    budget: budget(),
    budgetForDay: function (days = date.getCountDaysInMouth()) {
        return parseFloat((this.budget / days).toFixed(2));
    },
    marketName: marketName(),
    shopGoods: shopGoods(),
    employers: employers(),
    open: false,
    discount: false,
    priceCalc: function (price = 25000) {
        console.log (this.discount);
        return (!this.discount) ? price : (price * 80) / 100;
    },
};


let time = date.getHoursInDay();
if (time < 0) {
    console.log('Такого не может быть');
} else if (time > 8 && time < 20) {
    console.log('Рабочее время магазина');
} else if (time < 24) {
    console.log('Уже слишком поздно');
} else {
    console.log('В сутках только 24 часа');
}

console.log(`
Мой бюджет на 1 день: ${mainList.budgetForDay()}
Дисконтной система: ${mainList.discount}
Цена к оплате: ${mainList.priceCalc()}
`);

console.log(mainList);
