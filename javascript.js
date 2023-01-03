let firstNum = "";
let secondNum = "";
let operator = "";

const displayScreenInputs = document.querySelector(".screenImputs");
const displayScreenOutput = document.querySelector(".screenOutput");

const numberButtons = document.querySelectorAll(".number");

const operatorButtons = document.querySelectorAll(".operator");

const equalButton = document.querySelector(".equals");

const decimalButton = document.querySelector(".decimal");

const backButton = document.querySelector(".back");

const clearButton = document.querySelector(".clear");


numberButtons.forEach((number) => {
    number.addEventListener("click", (e) => {
        handleNumber(e.target.textContent);
    });
});

function handleNumber(number) {
    console.log(number);
};

operatorButtons.forEach((operator) => {
    operator.addEventListener("click", (e) => {
        handleOperator(e.target.textContent);
    });
});

function handleOperator(operator) {
    console.log(operator);
};