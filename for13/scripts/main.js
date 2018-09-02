$(document).ready(function () {
    let SCHEDULE_OF_TOURS = $('nav [href="#sheldure"]');
    let CHOOSE_TOUR = $('a[href="#tour"]');
    let GET_CONSULTATION = $('.main_btn');
    let overlay = $('.overlay');
    let modal = $('.modal');
    let modal_close = $('.modal button.close');

    function showEl() {
        overlay.fadeIn();
        modal.slideDown();
    }
    function hideEl() {
        overlay.fadeOut();
        modal.slideUp();
    }

    function openModal(el) {
        el.on('click', callback);
    }

    function callback() {
        showEl();
    }
    openModal(SCHEDULE_OF_TOURS);
    openModal(CHOOSE_TOUR);
    openModal(GET_CONSULTATION);

    modal_close.on('click', function () {
        hideEl();
    })

});