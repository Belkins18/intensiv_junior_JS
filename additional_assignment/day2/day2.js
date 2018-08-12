let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (let i = 0; i <= week.length - 1; i++) {
    if (week[i] === 'Четверг') {
        document.write('<em>' + week[i] + '</em><br>')
    } else
    if (week[i] === 'Суббота' || week[i] === 'Воскресенье') {
        document.write('<b>' + week[i] + '</b> <br>')
    } else {
        document.write(week[i] + '<br>')
    }
}


console.log('-------------------------------------------------');


// function random(val,min,max,l)
//     {var arr = [],m = [],n = void(0), len = max-min;
//         l--;
//         if (len < l) return;
//         for (var i=0; i<= len; i++){
//             m[i] = i + min;
//             m[i] == val && (n = i);
//         }
//         n !=  void(0) &&  m.splice(n,1)
//         for (var i=0; i<l; i++) {n = Math.floor(Math.random()*(m.length)); arr[i]=m.splice(n,1);};
//         n = Math.floor(Math.random()*(arr.length));
//         arr.splice(n,0,val)
//         return arr
// }
// document.write(random(3,0,20,4))
