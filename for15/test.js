const sum = require('./sum');
const num = require('./num');
const eachFile = require('./each');

let each = eachFile.each;
let myFunc = eachFile.myFunc;
let arr2 = eachFile.arr2;
// console.log(each);
// console.log(myFunc);
// console.log(arr2);

test('sumFalse', () => {
    expect(sum(12,2)).toBe(true);
});

test('sumTrue', () => {
    expect(sum(5,6)).toBe(true);
});

test('num', () => {
    expect(num).toBe(5);
});

const eachTest = each(arr2, myFunc);
const eachTestTypeof = typeof (each(arr2, myFunc));
console.log(eachTest);
console.log(eachTestTypeof);

test('eachType', () => {
    expect(eachTest).toBe(eachTestTypeof);
});
test('eachLength', () => {
    expect(eachTest.length).toBe(5);
});