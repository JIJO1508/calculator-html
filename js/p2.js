var add = document.getElementById("add")
var sub = document.getElementById("sub")
var mul = document.getElementById("mul")
var div = document.getElementById("divi")
var res = document.getElementById("result")
var restart = document.getElementById("restart")
var output = document.getElementById("output-div")
var input1 = document.getElementById("num1")
var input2 = document.getElementById("num2")

add.addEventListener("click" , () => {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = Number(num1) + Number(num2);
    var head = document.getElementById("result");
    res.textContent= `The result of ${num1} and ${num2} is ${result} `;
    output.style.display = "block"
})
sub.addEventListener("click" , () => {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = Number(num1) - Number(num2);
    var head = document.getElementById("result");
    res.textContent= `The result of ${num1} and ${num2} is ${result} `;
    output.style.display = "block"
})
mul.addEventListener("click" , () => {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = Number(num1) * Number(num2);
    var head = document.getElementById("result");
    res.textContent= `The result of ${num1} and ${num2} is ${result} `;
    output.style.display = "block"
})
div.addEventListener("click" , () => {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = Number(num1) / Number(num2);
    var head = document.getElementById("result");
    res.textContent= `The result of ${num1} and ${num2} is ${result} `;
    output.style.display = "block"
})

restart.addEventListener("click", () => {
    output.style.display = "none"
    input1.value = ""
    input2.value = ""
})