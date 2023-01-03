let firstNum = "";
let secondNum = "";
let operator = "";

const displayScreenInputs = document.querySelector(".screenInputs");
const displayScreenOutput = document.querySelector(".screenOutput");

const numberButtons = document.querySelectorAll(".number");

const operatorButtons = document.querySelectorAll(".operator");

const equalButton = document.querySelector(".equals");
equalButton.addEventListener("click", operate);

const decimalButton = document.querySelector(".decimal");

const backButton = document.querySelector(".back");

const clearButton = document.querySelector(".clear");


numberButtons.forEach((number) => {
    number.addEventListener("click", (e) => {
        handleNumber(e.target.textContent);
    });
});

function handleNumber(number) {
    firstNum += number;
    displayScreenOutput.textContent = firstNum;
};

operatorButtons.forEach((operator) => {
    operator.addEventListener("click", (e) => {
        handleOperator(e.target.textContent);
    });
});

function handleOperator(op) {
    operator = op;
    secondNum = firstNum;
    displayScreenInputs.textContent = secondNum + operator;
    firstNum = "";
    displayScreenOutput.textContent = "";
};

function operate() {
    secondNum = Number(secondNum);
    firstNum = Number(firstNum);

    if (operator === "+") {
        secondNum = secondNum + firstNum;
    } else if (operator === "-") {
        secondNum = secondNum - firstNum;
    } else if (operator === "x") {
        secondNum = secondNum * firstNum;
    } else if (operator === "/") {
        secondNum = secondNum / firstNum;
    };

    displayScreenOutput.textContent = "";
    displayScreenInputs.textContent = secondNum;
    firstNum = "";
    displayScreenOutput.textContent = "";
}