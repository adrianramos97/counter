const counter = document.getElementById('counter');
let number = 0;
const decrease = document.getElementById('btn-decrease');
const reset = document.getElementById('btn-reset');
const increase = document.getElementById('btn-increase');

decrease.addEventListener('click', function() {
    number = number - 1;
    counter.textContent = number;
    numColor();
})
increase.addEventListener('click', function() {
    number = number + 1;
    counter.textContent = number;
    numColor();
})
reset.addEventListener('click', function() {
    number = 0;
    counter.textContent = number;
    numColor();
})
function numColor() {
    if (number > 0) {
        counter.style.color = 'green';
    }
    else if (number < 0) {
        counter.style.color = 'red';
    }
    else {
        counter.style.color = 'black';
    }
}