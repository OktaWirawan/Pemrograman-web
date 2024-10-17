let expression = '';

function insert(value) {
    expression += value;
    document.getElementById('result').value = expression;
}

function operate(operator) {
    expression += operator;
    document.getElementById('result').value = expression;
}

function clearDisplay() {
    expression = '';
    document.getElementById('result').value = '';
}

function deleteLast() {
    expression = expression.slice(0, -1);
    document.getElementById('result').value = expression;
}

function calculate() {
    try {
        let result = eval(expression.replace('^', '**')); // Replace ^ with ** for exponentiation
        document.getElementById('result').value = result;
        expression = result;
    } catch (e) {
        document.getElementById('result').value = 'Error';
        expression = '';
    }
}
