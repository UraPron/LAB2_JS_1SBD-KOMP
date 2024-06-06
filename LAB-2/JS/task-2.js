function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

function calculatePower() {
    let base = parseInt(document.getElementById("baseInput").value, 10);
    let exponent = parseInt(document.getElementById("exponentInput").value, 10);
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = '';

    if (isNaN(base) || isNaN(exponent) || base < 0 || exponent < 0) {
        resultElement.innerHTML = "Будь ласка, введіть натуральні числа для основи і степеня.";
    } else {
        let result = power(base, exponent);
        resultElement.innerHTML = `Результат: ${base}^${exponent} = ${result}`;
    }
}
