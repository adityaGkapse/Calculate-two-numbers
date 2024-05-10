function multiplyBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;

    document.getElementById("result").innerHTML = "result is " + num1 * num2;
}

function divideBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;

    document.getElementById("result").innerHTML = "result is " + num1 / num2;
}

function addition() {
    var num1 = document.getElementById("firstNumber").value;
    var num2 = document.getElementById("secondNumber").value;
    var sum = +num1 + +num2;

    document.getElementById("result").innerHTML = "result is " + sum;
}
