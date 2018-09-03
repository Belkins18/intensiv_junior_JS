let tab = require('../parts/tab');
let modal = require('../parts/modal');
let ajax = require('../parts/ajax');
let slider = require('../parts/slider');
let calc = require('../parts/calc');
let timer = require('../parts/timer');
let timerSettings = require('../parts/timerSettings');

function descriptionBtn() {
    let info = document.querySelector('.info');
    let btns = document.getElementsByClassName('description-btn');
    info.addEventListener('click', (evt) => {
        let _target = evt.target;
        let descBtn = _target.closest('.description-btn');
        if (!descBtn) {
            return;
        } else {
            console.log(descBtn.closest('.info-tabcontent') );
        }
    });
}

document.addEventListener("DOMContentLoaded", function(){
    tab();
    modal();
    ajax();
    slider();
    calc();
    descriptionBtn();
    timer(timerSettings);
});

