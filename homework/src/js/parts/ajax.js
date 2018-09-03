function ajax() {
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
    });

}

module.exports = ajax;