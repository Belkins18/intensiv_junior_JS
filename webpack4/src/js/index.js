import "@babel/polyfill";
import './polyfills/index';

import tab from './modules/tab';
import Modal from './modules/modal';
import ajax from './modules/ajax';
import slider from './modules/slider';
import calc from './modules/calc';
import timerData from './modules/timer/timerSettings';
import timer from './modules/timer/timer';
import description from './modules/description';

let modal = new Modal();
let tData = timerData.init();

document.addEventListener("DOMContentLoaded", function(){
    tab.init();
    modal.init();
    ajax.init();
    slider.init();
    calc.init();
    description();
    timer.init(tData);
});
