const clearBtn = document.querySelector('#clear-btn');
const resultBtn = document.querySelector('#result-btn');
let toggleBtn = document.querySelector(".toggle-switch");
let body = document.querySelector("body");

function toDisplay(value) {
    document.getElementById('display').value += value;
}

clearBtn.addEventListener('click', clear);

function clear() {
    document.querySelector('#display').value = "";
}

resultBtn.addEventListener('click', calculate);

function calculate() {
    let expression = document.querySelector('#display').value;
    let result = eval(expression);
    document.querySelector('#display').value = result;
}

