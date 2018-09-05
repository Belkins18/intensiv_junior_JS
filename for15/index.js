// Функция sum должна возвращать тип данных true. Проверить её на это.

function sum(a, b) {
	return a + b > 10;
}

// Переменная num должна быть равна 5. Проверить на соответствие.

let arr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];
let num = arr[1][1];

// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.

var each = function (startArr, f) {
	return f(startArr)
};
var arr2 = [64, 49, 36, 25, 16];
var myFunc = function (a) {
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i] = Math.sqrt(a[i]);
	}
	return newArr;
}

const eachTest = each(arr2, myFunc);
const eachTestTypeof = typeof (each(arr2, myFunc));

let assert = require('chai').assert

describe("sum", function () {

	it("Верно ли суждение: 2 + 2 > 10", function () {
		assert.equal(sum(2, 2), true);
	});
	it("Верно ли суждение: 8 + 4 > 10", function () {
		assert.equal(sum(8, 4), true);
	});

});

describe("num", function () {

	it("Переменная num = 5?", function () {
		assert.equal(num, 5);
	});

});

describe("eachTest", function () {

	it('eachTest isArray?', function () {
		assert.typeOf(eachTest, 'Array')
	});
	it('eachTestTypeof', function () {
		assert.typeOf(eachTest, eachTestTypeof)
	});
	it('eachTest has 5 el?', function () {
		assert.lengthOf(eachTest, 5, 'eachTest has 5 el');
	});

});


