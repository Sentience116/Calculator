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
const clear = document.getElementById("clear");
const sub = document.getElementById("sub");
const div = document.getElementById("div");
const mul = document.getElementById("mul");

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

let calculator = "";
let newNum;
let op = "";

clear.addEventListener("click", function() {
    
    if (dis.value !== "") {
        dis.value = "";

        console.log("half clear")
    } else if (dis.value === "") {
        dis.value = "";
        calculator = "";
        
        console.log("full clear")
    }
    
});

add.addEventListener("click", function() {
    if (op === ""){
        newNum = (dis.value);
    } else if(op === "add"){
        newNum = (Number(calculator) + Number(dis.value));
    } else if (op === "sub"){
        newNum = (Number(calculator) - Number(dis.value));
    } else if (op === "div"){
        newNum = (Number(calculator) / Number(dis.value));
    } else if (op === "mul") {
        newNum = (Number(calculator) * Number(dis.value));
    } else {
        console.log("err");
    };

    op = "add";
    calculator = "";
    calculator = (newNum);
    dis.value = "";
});

sub.addEventListener("click", function() {
    if (op === ""){
        newNum = (dis.value);
    } else if(op === "add"){
        newNum = (Number(calculator) + Number(dis.value));
    } else if (op === "sub"){
        newNum = (Number(calculator) - Number(dis.value));
    } else if (op === "div"){
        newNum = (Number(calculator) / Number(dis.value));
    } else if (op === "mul") {
        newNum = (Number(calculator) * Number(dis.value));
    } else {
        console.log("err");
    };

    op = "sub";
    calculator = "";
    calculator = (newNum);
    dis.value = "";
});

div.addEventListener("click", function() {
    if (op === ""){
        newNum = (dis.value);
    } else if(op === "add"){
        newNum = (Number(calculator) + Number(dis.value));
    } else if (op === "sub"){
        newNum = (Number(calculator) - Number(dis.value));
    } else if (op === "div"){
        newNum = (Number(calculator) / Number(dis.value));
    } else if (op === "mul") {
        newNum = (Number(calculator) * Number(dis.value));
    } else {
        console.log("err");
    };

    op = "div";
    calculator = "";
    calculator = (newNum);
    dis.value = "";
});

mul.addEventListener("click", function() {
    if (op === ""){
        newNum = (dis.value);
    } else if(op === "add"){
        newNum = (Number(calculator) + Number(dis.value));
    } else if (op === "sub"){
        newNum = (Number(calculator) - Number(dis.value));
    } else if (op === "div"){
        newNum = (Number(calculator) / Number(dis.value));
    } else if (op === "mul") {
        newNum = (Number(calculator) * Number(dis.value));
    } else {
        console.log("err");
    };

    op = "mul";
    calculator = "";
    calculator = (newNum);
    dis.value = "";
});

equ.addEventListener("click", function() {
    if (op === ""){
        newNum = (dis.value);
        dis.value = newNum;
        console.log(dis.value)
    } else if(op === "add"){
        newNum = (Number(calculator) + Number(dis.value));
        dis.value = newNum;
        console.log(dis.value)
    } else if (op === "sub"){
        newNum = (Number(calculator) - Number(dis.value));
        dis.value = newNum;
        console.log(dis.value)
    } else if (op === "div"){
        newNum = (Number(calculator) / Number(dis.value));
        dis.value = newNum;
        console.log(dis.value)
    } else if (op === "mul") {
        newNum = (Number(calculator) * Number(dis.value));
        dis.value = newNum;
        console.log(dis.value)
    } else {
        console.log("err");
    };

    op = "";
    calculator = "";
    calculator = (newNum);
});
