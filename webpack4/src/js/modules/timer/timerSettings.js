export default {
    init() {
        let timesParam = {
            downDate: "Sep 06, 2018 21:00:00",
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
        return timesParam;
    }
}
