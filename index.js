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
const dec = document.getElementById("dec");


const add = document.getElementById("add");
const equ = document.getElementById("equ");
const clear = document.getElementById("clear");
const sub = document.getElementById("sub");
const div = document.getElementById("div");


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
dec.addEventListener("click", () => alert("Sorry that feature hasn't been developed yet"))

const calculator = [];

clear.addEventListener("click", function() {
    dis.value = "";
    calculator.length = 0;
    console.log(calculator);
});

add.addEventListener("click", function() {

    const newNum = (Number(calculator) + Number(dis.value))

    calculator.length = 0;
    calculator.push(newNum);
    dis.value = "";
    console.log(calculator);
});

sub.addEventListener("click", function() {
    const newNum = (Number(calculator) - Number(dis.value))

    calculator.length = 0;
    calculator.push(newNum);
    dis.value = "";
    console.log(calculator);
});

div.addEventListener("click", function() {
    const newNum = (Number(calculator) / Number(dis.value))

    calculator.length = 0;
    calculator.push(newNum);
    dis.value = "";
    console.log(calculator);
});


equ.addEventListener("click", function() {
    dis.value = calculator;
    const test = Number(calculator);

    console.log(calculator);
    console.log(test);
});
