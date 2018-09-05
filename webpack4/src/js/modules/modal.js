import getClassName from '../helpers/getClassName';

export default class Modal {
    constructor() {
        this.btn = document.querySelector('.more');
        this.popup = document.querySelector('.popup');
        this.popupClose = this.popup.querySelector('.popup-close');
        this.overlay = this.popup.closest('.overlay');
        this.body = document.body;
    }
    init() {
        this.btn.addEventListener('click', (evt) => {
            let _target = evt.target;
            let modalBtn = _target.closest(`.${getClassName(this.btn)}`);
            if (!modalBtn) {
                return;
            } else {
                this.overlay.classList.add('is-open');
                this.body.style.overflow = 'hidden';
            }
        });
        this.popupClose.addEventListener('click', (evt) => {
            evt.preventDefault();
            let _target = evt.target;
            console.log(_target);
            if (!_target.closest(`.${getClassName(this.popupClose)}`)) {
                return;
            } else {
                this.overlay.classList.remove('is-open');
                this.overlay.classList.remove('fadeOut');
                this.body.style.overflow = 'inherit';
            }
        });
    };
    modalOpen(){
        this.overlay.classList.add('is-open');
        this.body.style.overflow = 'hidden';
    }
};
