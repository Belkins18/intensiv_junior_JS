// step 1
let menu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.menu-item');
let li = document.createElement('li');
li.innerHTML = 'Пятый пункт';
li.classList.add('menu-item');

menu.insertBefore(menuItem[1], menuItem[3]);
menu.appendChild(li);

// step 2
document.body.style.background = 'url(img/apple_true.jpg)';

// step 3
let title = document.getElementById('title');
title.textContent = 'Мы продаем только подлинную технику Apple';

// step 4
let column = document.getElementsByClassName('column');
let adv = document.querySelector('.adv');

console.log(column);
column[1].removeChild(adv);

// step 5
let question  = document.getElementById('prompt');
let writeToPrompt = function (selector) {
  selector.textContent = prompt('Ваше отношение к технике Apple', '');
};
writeToPrompt(question);