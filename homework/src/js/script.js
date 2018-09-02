'use strict';
// only run when the substr() function is broken
if ('ab'.substr(-1) != 'b') {
    /**
     *  Get the substring of a string
     *  @param  {integer}  start   where to start the substring
     *  @param  {integer}  length  how many characters to return
     *  @return {string}
     */
    String.prototype.substr = function(substr) {
        return function(start, length) {
            // call the original method
            return substr.call(this,
                // did we get a negative start, calculate how much it is from the beginning of the string
                // adjust the start parameter for negative value
                start < 0 ? this.length + start : start,
                length)
        }
    }(String.prototype.substr);
}



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
            evt.preventDefault();
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
};

let timesParam = {
    downDate: "Sep 03, 2018 21:00:00",
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
};
let timer = function(obj) {
    setInterval(function() {
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
        };

        obj.domElements.hours.textContent = `${res.hours()}`;
        obj.domElements.minutes.textContent = `${res.minutes()}`;
        obj.domElements.seconds.textContent = `${res.seconds()}`;

        if (res.different() < 0) {
            clearInterval(t);
            obj.domElements.hours.textContent = `00`;
            obj.domElements.minutes.textContent = `00`;
            obj.domElements.seconds.textContent = `00`;
            obj.domElements.timerAction.textContent = `EXPIRED`;
        }
    }, 1000);
};




document.addEventListener("DOMContentLoaded", function(){
    eventListeners.tabs();
    eventListeners.descriptionBtn();
    eventListeners.modal();

    timer(timesParam);
});

document.addEventListener("DOMContentLoaded", function(){
    //FORM
    let massage = new Object();
    massage.domLoading = 'Загрузка...';
    massage.success = 'Спасибо! Скоро с Вами свяжутся';
    massage.failure = 'Что-то пошло не так';

    let form = document.getElementsByClassName('main-form')[0],
        input = form.getElementsByTagName('input'),
        form2 = document.getElementById('form'),
        input2 = form2.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
    statusMessage.classList.add('status');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.appendChild(statusMessage);
        let formData = new FormData(form);

        function postData(data) {
            return new Promise(function(resolve, reject) {
                //AJAX
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

                request.onreadystatechange = function () {
                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readyState === 4) {
                        if (request.status == 200 && request.status < 300) {
                            resolve();
                        }
                        else {
                            reject();
                        }
                    }
                };

                request.send(formData);
            });

        }
        function clearInput() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }
        postData(formData)
            .then(() => statusMessage.innerHTML = massage.loading)
            .then(() => {
                statusMessage.innerHTML = massage.success;
                setInterval(()=> {
                    // eventListeners.modal().popupClose
                    // //                     // modalSelectors.popupClose.click();
                    // modalSelectors.popupClose.removeEventListener('click', x);
                }, 3000);
            })
            .catch(()=> statusMessage.innerHTML = massage.failure)
            .then(clearInput);

    });

    form2.addEventListener('submit', function (event) {
        event.preventDefault();
        form2.appendChild(statusMessage);
        let statusField = this.querySelector('.status');
        let formData = new FormData(form2);
        let postData = function(data) {
            return new Promise(function (resolve, reject) {
                //AJAX
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                request.onreadystatechange = function () {
                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readyState === 4) {
                        if (request.status == 200 && request.status < 300) {
                            resolve();
                        }
                        else {
                            reject();
                        }
                    }
                };
                request.send(formData);
            });
        };

        let clearInput = function () {
            for (let i = 0; i < input2.length; i++) {
                input2[i].value = '';
            }
        };
        let hideStatus = function() {
            statusField.style.display = 'none';
        };

        postData(formData)
            .then(()=> statusMessage.innerHTML = massage.loading)
            .then(()=> {
                statusMessage.innerHTML = massage.success;
                setTimeout(()=>{
                    hideStatus();
                }, 3000)
            })
            .catch(()=> statusMessage.innerHTML = massage.failure)
            .then(clearInput);
    })


    // Slider
    let slideIndex = 1,
        slides = document.getElementsByClassName('slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotWrap = document.querySelector('.slider-dots'),
        dots = document.getElementsByClassName('dot');

    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('dot-active');
        }

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n)
    }

    function currentSlide(n) {
        showSlides(slideIndex = n)
    }

    prev.addEventListener('click', function () {
        plusSlides(-1);
    });

    next.addEventListener('click', function () {
        plusSlides(1);
    });

    dotWrap.addEventListener('click', function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });


    // Calculator
    let persons = document.getElementsByClassName('counter-block-input')[0],
        resDays = document.getElementsByClassName('counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0,
        pattern = /[^\d]/g;

    totalValue.innerHTML = 0;
    function checkNumber(input) {
        input.value = input.value.replace(pattern, '').substr(0, 2);
        console.log(input.value);
    }
    persons.addEventListener('keyup', function () {
        checkNumber(this);
    });
    resDays.addEventListener('keyup', function () {
        checkNumber(this);
    });
    persons.addEventListener('change', function () {
        personsSum = +this.value;
        console.log(typeof(personsSum));
        console.log(Number.isInteger(personsSum));
        if (Number.isInteger(personsSum) && personsSum > 0) {
            total = (daysSum + personsSum) * 4000;
            console.log(total)
            if (resDays.value == '') {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        } else {
            this.value = '';
            totalValue.innerHTML = 0;
        }
    });

    resDays.addEventListener('change', function () {
        daysSum = +this.value;
        if (Number.isInteger(daysSum) && daysSum > 0) {
            total = (daysSum + personsSum) * 4000;
            if (persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        } else {
            this.value = '';
            totalValue.innerHTML = 0;
        }
    });

    place.addEventListener('change', function () {
        if (resDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    })

});