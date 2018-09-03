// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.

var each = function(startArr, f) {
	return f(startArr)
};
var arr2 = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
};
// console.log(each(arr2, myFunc)); // [ 8, 7, 6, 5, 4 ]
// console.log(typeof each(arr2, myFunc)); // object
// console.log(each(arr2, myFunc).length); // 5

module.exports = {
    each: each,
    myFunc: myFunc,
    arr2: arr2
};
