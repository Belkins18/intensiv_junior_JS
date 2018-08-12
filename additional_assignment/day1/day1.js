let num = 33721;
const number = (digits) => {
    let getArray = (n) => {
        n = String(n).split('').map(Number);
        return n;
    };

    let arr = getArray(digits);

    return arr.reduce(function(mult, current) {
        return mult * current
    });
};

const additionalAssignment = {
    resultNumber: number(num),

    powResultNumber: function () {
        return Math.pow( this.resultNumber, 3);
    },
    twoDigitsPowResultNumber: function () {
        return parseInt(/\d{2}/.exec( '' + this.powResultNumber())[0])
    },
};

console.log(`
ДОПОЛНИТЕЛЬНОЕ (УСЛОЖНЕННОЕ) ЗАДАНИЕ:
    
1) результат умножения цифр числа:                  |   ${additionalAssignment.resultNumber}
2) возведение в степень 3:                          |   ${additionalAssignment.powResultNumber()}
3) вывод на экран первых 2 цифр полученного чиса:   |   ${additionalAssignment.twoDigitsPowResultNumber()}
`);