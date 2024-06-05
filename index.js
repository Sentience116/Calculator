const dis = document.getElementById("text-display");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");

const add = document.getElementById("add");
const equ = document.getElementById("equ");



one.addEventListener("click", () => dis.value += 1);
two.addEventListener("click", () => dis.value += 2);
three.addEventListener("click", () => dis.value += 3);
four.addEventListener("click", () => dis.value += 4);
five.addEventListener("click", () => dis.value += 5);
six.addEventListener("click", () => dis.value += 6);
seven.addEventListener("click", () => dis.value += 7);
eight.addEventListener("click", () => dis.value += 8);
nine.addEventListener("click", () => dis.value += 9);
zero.addEventListener("click", () => dis.value += 0);

const calculator = [];

add.addEventListener("click", function formula() {
    calculator.push(dis.value);
    calculator.push("+")
    dis.value = "";
    console.log(calculator);
});

equ.addEventListener("click", function equals() {
   calculator
   
    console.log(calculator);
})