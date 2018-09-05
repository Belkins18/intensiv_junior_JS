export default {
    init() {
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
    }
}