'use strict';
function getClassName(el) {
    return el.className;
}

let eventListeners = {
    tabs() {
        let info = document.getElementsByClassName('info-header')[0],
            infoTab = document.getElementsByClassName('info-header-tab'),
            infoCnt = document.getElementsByClassName('info-tabcontent');

        function hideTabContent(a) {
            for (let i = a; i < infoCnt.length; i++) {
                infoCnt[i].classList.remove('show');
                infoCnt[i].classList.add('hide');
            }
        }
        hideTabContent(1);

        function showTabContent(b) {
            if (infoCnt[b].classList.contains('hide')) {
                hideTabContent(0);
                infoCnt[b].classList.remove('hide');
                infoCnt[b].classList.add('show');
            }
        }

        info.addEventListener('click', function (event) {
            let target = event.target;
            if (target.className == 'info-header-tab') {
                for (let i = 0; i < infoTab.length; i++) {
                    if (target == infoTab[i]) {
                        showTabContent(i);
                        break;
                    }
                }
            }
        });
    },
    descriptionBtn() {
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
    },
    modal() {
        let btn = document.querySelector('.more'),
            popup = document.querySelector('.popup'),
            popupClose = popup.querySelector('.popup-close'),
            overlay = popup.closest('.overlay'),
            body = document.body;
        
        btn.addEventListener('click', (evt) => {
            let _target = evt.target;
            let modalBtn = _target.closest(`.${getClassName(btn)}`);
            if (!modalBtn) {
                return;
            } else {
                overlay.classList.add('is-open');
                body.style.overflow = 'hidden';
            }
        });
        popupClose.addEventListener('click', (evt) => {
            let _target = evt.target;
            console.log(_target);
            if (!_target.closest(`.${getClassName(popupClose)}`)) {
                return;
            } else {
                overlay.classList.remove('is-open');
                overlay.classList.remove('fadeOut');
                body.style.overflow = 'inherit';
            }
        })
    }
}




let timesParam = {
    downDate: "Aug 30, 2018 00:00:00",
    domElements: {
        hours: document.querySelector('#timer .hours'),
        minutes: document.querySelector('#timer .minutes'),
        seconds: document.querySelector('#timer .seconds'),
        timerAction:  document.querySelector('.timer .timer-action'),
    },
    ms() {
        return this.getDifferent();
    },
    days() {
        return this.getDays(this.getDifferent());
    },
    hours(ms) {
        return this.getHours(this.getDifferent());
    },
    minutes(ms) {
        return this.getMinutes(this.getDifferent());
    },
    seconds(ms) {
        return this.getSeconds(this.getDifferent());
    },

    getCurDate() {
        return new Date().getTime();
    },
    getDownDate() {
        return new Date(this.downDate).getTime();
    },
    getDifferent() {
       return this.getDownDate() - this.getCurDate();
    },
    getDays(ms) {
        return Math.floor(ms / (1000 * 60 * 60 * 24));
    },
    getHours(ms) {
        return Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    },
    getMinutes(ms) {
        return Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    },
    getSeconds(ms) {
        return Math.floor((ms % (1000 * 60)) / 1000);
    }
}

document.addEventListener("DOMContentLoaded", function(){
    eventListeners.tabs();
    eventListeners.descriptionBtn();
    eventListeners.modal();
    let t = setInterval(function(obj = timesParam) {
        let res = {
            different() {
                return obj.getDifferent();
            },
            correct(func) {
                return (func < 10) ? `0${func}` : func;
            },
            days() {
                return obj.days();
            },
            hours() {
                if (this.days() > 0) {
                    return this.days() * 24 + parseInt(obj.hours(), 10);
                } else {
                    if (obj.hours() < 10) {
                        return `0${obj.hours()}`
                    } else {
                        return obj.hours();
                    }
                }
            },
            minutes() {
                return (obj.minutes() < 10) ? `0${obj.minutes()}` : obj.minutes();
            },
            seconds() {
                return (obj.seconds() < 10) ? `0${obj.seconds()}` : obj.seconds();
            }
        }

        obj.domElements.hours.textContent = `${res.hours()}`;
        obj.domElements.minutes.textContent = `${res.minutes()}`;
        obj.domElements.seconds.textContent = `${res.seconds()}`;
        
        if (res.different() < 0) {
            clearInterval(t),
            obj.domElements.hours.textContent = `00`;
            obj.domElements.minutes.textContent = `00`;
            obj.domElements.seconds.textContent = `00`;
            obj.domElements.timerAction.textContent = `EXPIRED`;
        }
    }, 1000);
});

document.addEventListener("DOMContentLoaded", function(){
    //FORM
    let massage = new Object();
    massage.domLoading = 'Загрузка...';
    massage.success = 'Спасибо! Скоро с Вами свяжутся';
    massage.failure = 'Что-то пошло не так';

    let form = document.getElementsByClassName('main-form')[0],
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
    statusMessage.classList.add('status');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        //AJAX
        let request = new XMLHttpRequest();
        request.open('POST', 'server.php')
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        let formData = new FormData(form);
        request.send(formData);

        request.onreadystatechange = function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = massage.loading;
            } else if (request.readyState === 4) {
                if (request.status == 200 && request.status < 300) {
                    statusMessage.innerHTML = massage.success;
                }
                else {
                    statusMessage.innerHTML = massage.failure;
                }
            }
        }
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    })
});