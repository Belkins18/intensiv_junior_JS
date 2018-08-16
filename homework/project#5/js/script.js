const arrayList = ['name', 'budget', 'goods', 'items', 'employers', 'discount', 'isopen'];
const arrayList5 = ['choose-item', 'time-value', 'count-budget-value'];
// step 1
console.log('--- step 1 ---');
let elem = document.getElementById('open-btn');
console.log(elem);

// step 2
console.log('--- step 2 ---');
const step2arr = arrayList.map(function(item, index = 0) {
    let res = [];
    let resItem = {};
    if (item !== 'discount' && item !== 'isopen') {
        console.log(document.querySelector(`.${item}-value`));
        resItem.name = `.${item}-value`;
        resItem.selector = document.querySelector(`.${item}-value`);
        res.push(resItem);
        return res;
    }
});
console.log(step2arr);

// step 3
console.log('--- step 3 ---');
let step3arr = document.querySelectorAll('.goods-item');
step3arr.forEach((item) => {
    console.log(item);
});

// step 4
console.log('--- step 4 ---');
let form = document.querySelector('.main-functions');
let elements = form.getElementsByTagName('button');
for (let i = 0; i < elements.length; i++) {
    let buttons = elements[i];
    console.log(buttons);
}

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



