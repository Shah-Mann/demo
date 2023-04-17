// var num1 = parseInt(document.getElementById("num1").value);
// var num2 = parseInt(document.getElementById("num2").value);

function add() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let result = num1 + num2;
  console.log(`The sum of ${num1} + ${num2} = ${result}`);
  document.getElementById("result").value = result;
}

function sub() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let result = num1 - num2;
  document.getElementById("result").value = result;
}
function mul() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let result = num1 * num2;
  document.getElementById("result").value = result;
}
function div() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let result = num1 / num2;
  document.getElementById("result").value = result;
}
