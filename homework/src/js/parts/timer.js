
let timer = function(obj) {
    let t = setInterval(function() {
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


module.exports = timer;