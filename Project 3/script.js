let screen = document.getElementById("calculator-screen-text");
let currentInput = "";
let previousInput = "";
let operator = null;
let resultDisplayed = false;

function updateScreen(value) {
    screen.textContent = value || "0";
}

function clearText() {
    currentInput = "";
    previousInput = "";
    operator = null;
    resultDisplayed = false;
    updateScreen("0");
}

function numAdd(num) {
    if (resultDisplayed) {
        currentInput = "";
        resultDisplayed = false;
    }

    if (num === "0" && currentInput === "0") return;
    if (currentInput === "0" && num !== ".") currentInput = "";

    if (currentInput.length >= 10) {
        alert("En fazla 12 rakam girebilirsiniz!");
        return;
    }

    currentInput += num;
    updateScreen(currentInput);
}

function setOperator(op) {
    if (currentInput === "") return;
    if (previousInput !== "") calculate();
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

function equal() {
    if (operator && previousInput !== "" && currentInput !== "") {
        calculate();
        operator = null;
    }
}

function calculate() {
    let prev = parseFloat(previousInput);
    let curr = parseFloat(currentInput);
    let result = 0;

    switch (operator) {
        case "+": result = prev + curr; break;
        case "-": result = prev - curr; break;
        case "*": result = prev * curr; break;
        case "/":
            if (curr === 0) {
                updateScreen("Error");
                currentInput = "";
                return;
            }
            result = prev / curr;
            break;
    }

    currentInput = result.toString();
    previousInput = "";
    resultDisplayed = true;

    if (currentInput.length > 12) {
        currentInput = currentInput.slice(0, 12);
        alert("Sonuç 12 karakterden uzun olduğu için kesildi!");
    }

    updateScreen(currentInput);
}

function num0() { numAdd("0"); }
function num1() { numAdd("1"); }
function num2() { numAdd("2"); }
function num3() { numAdd("3"); }
function num4() { numAdd("4"); }
function num5() { numAdd("5"); }
function num6() { numAdd("6"); }
function num7() { numAdd("7"); }
function num8() { numAdd("8"); }
function num9() { numAdd("9"); }

function plus() { setOperator("+"); }
function minus() { setOperator("-"); }
function multiplication() { setOperator("*"); }
function divide() { setOperator("/"); }
