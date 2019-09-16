import { CountUp } from '.assets/js/CountUp.min.js';

window.onload = function () {
    var countUp = new CountUp('clients-number', 100000);
    countUp.start();
}