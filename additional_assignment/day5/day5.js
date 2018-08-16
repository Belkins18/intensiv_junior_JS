function formatDate(date, type) {
    let check = function (attr) {
        return (attr < 10) ?( attr = '0' + attr, attr) : attr;
    };
    let days  = ['Понедельник', 'Вторник', 'Среда', 'Четвер', 'Пятница', 'Суббота', 'Воскресенье'];
    if (type === 'date') {
        let delim = '.';
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        return '' + check(day) + delim + check(month) + delim + year;
    } else if (type === 'time') {
        let delim = ':';
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        return '' + check(h) + delim + check(m) + delim + check(s);
    }
};

let arr = [];
arr.push(formatDate(new Date(), 'time'));
arr.push(formatDate(new Date(), 'date'));
console.log('arr: ' + arr.join(' '));

let str = `${formatDate(new Date(), 'time')} ${formatDate(new Date(), 'date')}`;
console.log('str: ' + str);

Date.prototype.getDayOfWeek = function(){
    return ["Воскресенье","Понедельник","Вторник","Среда","Четвер","Пятница","Суббота"][ this.getDay() ];
};
console.log(new Date().getDayOfWeek());

//
// console.log(document.getElementById('start').value);
// console.log(document.getElementById('start').value);
// console.log(new Date(document.getElementById('start').value).getTime());
//
// console.log(document.getElementById('end').value);
// console.log(new Date(document.getElementById('end').value).getTime());
// console.log(new Date(document.getElementById('end').value).getTime() - new Date(document.getElementById('start').value).getTime());
