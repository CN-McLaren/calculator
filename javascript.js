let firstNum = "";
let secondNum = "";
let operator = "";

const displayScreenCurrent = document.querySelector(".screenCurrent");
const displayScreenPrevious = document.querySelector(".screenPrevious");

const numberButtons = document.querySelectorAll(".number");

const operatorButtons = document.querySelectorAll(".operator");

const equalButton = document.querySelector(".equals");
equalButton.addEventListener("click", operate);

const decimalButton = document.querySelector(".decimal");

const backButton = document.querySelector(".back");

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clearBtn);


numberButtons.forEach((number) => {
    number.addEventListener("click", (e) => {
        handleNumber(e.target.textContent);
    });
});

function handleNumber(number) {
    firstNum += number;
    displayScreenPrevious.textContent = firstNum;
};

operatorButtons.forEach((operator) => {
    operator.addEventListener("click", (e) => {
        handleOperator(e.target.textContent);
    });
});

function handleOperator(op) {
    operator = op;
    secondNum = firstNum;
    displayScreenCurrent.textContent = secondNum + operator;
    firstNum = "";
    displayScreenPrevious.textContent = "";
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
        if (firstNum === 0 || secondNum === 0) {
            secondNum = "ERROR";
            resultsDisplay();
            return;
        }
        secondNum /= firstNum;
    };

    secondNum = secondNum.toString();
    resultsDisplay();

}

function resultsDisplay() {
    if (secondNum.length <= 8) {
        displayScreenCurrent.textContent = secondNum;
    } else {
        displayScreenCurrent.textContent = secondNum.slice(0, 8) + "...";
    }
    displayScreenPrevious.textContent = "";
    operator = "";
    firstNum = "";
}

function clearBtn() {
    firstNum = "";
    secondNum = "";
    operator = "";
    displayScreenCurrent.textContent = "";
    displayScreenPrevious.textContent = "";
}