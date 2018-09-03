function modal() {
    function getClassName(el) {
        return el.className;
    }

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

module.exports = modal;