function calc() {
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
}

module.exports = calc;