let arr = {
    first: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    second: ['13414235', '37628476826491', '782734523', '7465816294', '928305027', '5392507458', '83874535']
};

let week = (arr) => {
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] === 'Четверг') {
            document.write('<em>' + arr[i] + '</em><br>')
        } else
        if (arr[i] === 'Суббота' || arr[i] === 'Воскресенье') {
            document.write('<b>' + arr[i] + '</b><br>')
        } else {
            document.write(arr[i] + '<br>')
        }
    }
};

let numbersWrite = (arr) => {
    document.write('------------------------------------<br>');
    arr.forEach( (item) => {
        if ((item.split('')[0] === '3') || (item.split('')[0] === '7')) {
            document.write(`${item}<br>`);
        }
    });
};

week(arr.first);
numbersWrite(arr.second);






