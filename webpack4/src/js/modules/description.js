import Modal from './modal';

let modal = new Modal();

export default function descriptionBtn() {
    let info = document.querySelector('.info');
    let btns = document.getElementsByClassName('description-btn');
    info.addEventListener('click', (evt) => {
        let _target = evt.target;
        let descBtn = _target.closest('.description-btn');
        if (!descBtn) {
            return;
        } else {
            console.log(descBtn.closest('.info-tabcontent') );
            modal.modalOpen()
        }
    });
};