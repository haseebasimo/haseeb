"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Q46
let laptop = {
    make: "Hp",
    model: "Gb 5 ",
    year: 2023,
    describe: function () {
        console.log(`This laptop is a ${this.model} ${this.year} ${this.make}`);
    }
};
laptop.describe();
//Q47
let laptops = [
    { make: "Dell", model: "xp 15", year: 2019 },
    { make: "Hp", model: "Gb 5", year: 2022 },
    { make: "Apple", model: "Macbook", year: 2019 }
];
let [laptop1, laptop2] = laptops;
console.log(laptop1);
console.log(laptop2);
//Q48
let pricesSet1 = [1200, 1500, 1100];
let pricesSet2 = [1000, 1300, 1600];
let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
console.log(combinedPrices);
//49
function myhobbies(...hobbies) {
    hobbies.forEach(hobby => {
        console.log(`I enjoy my ${hobby}.`);
    });
}
myhobbies("coding", "football", "Reading books");
//Q50
let myidealday = `My ideal would involve
1- waking early in the morning and go for pray
2- Spending 2 to 3 hours for coding typrscript
3- Ending a day by praying isah salat.`;
console.log(myidealday);
//Q51
function calculateArea(width, height) {
    return width * height;
}
;
let calculateAreaArrow = (width, height) => width * height;
console.log(calculateAreaArrow(5, 7));
//Q52
let smartphones = {
    make: "Google pixel",
    model: "4xl",
    specs: {
        battery: "4000mah",
        storage: "6/128",
        screen_size: "5.6 inch"
    }
};
console.log(smartphones);
//Q53
let developerSkills = {
    languages: ["java", "phython", "c++"],
    frameWorks: ["React", "Angular", "Veu"],
    tools: ["git", "webpack", "Docker"]
};
let { languages, frameWorks, tools } = developerSkills;
console.log(`language:${languages[0]} , FRamework: ${frameWorks[0]} , Tool:${tools[0]}`);
//Q54
function createObjectWithDynamicKey(keY, value) {
    // let dynamicObject = {};
    dynamicObject: [keY] = value;
    //return dynamicObject;
}
let userPreference = createObjectWithDynamicKey("theme", "dark");
console.log(userPreference);
//Q55
let number = [1, 2, 3, 4, 5, 6];
let doubleNumber = number.map(number => number * 2);
console.log(doubleNumber);
//Q56
let mixedArray = [`1,"alpha",2 "beta",3,"gamma`];
let stringArray = mixedArray.filter(item => typeof item === "string");
console.log(stringArray);
//Q57
let grades = [88, 45, 90, 99, 53, 70];
let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;
console.log(averageGrade);
//Q58
function averageScore(...score) {
    let total = score.reduce((sum, score) => sum + score, 0);
    return total / score.length;
}
console.log(averageScore(30, 56, 70));
//59
function makeAdder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
;
let addFive = makeAdder(5);
console.log(addFive(10));
//60 
let userProfile = (function () {
    let name = "John";
    let age = 30;
    return {
        displayInfo: function () {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();
userProfile.displayInfo();
//Q67
function addNumandString(number1, numberString) {
    return number1 + Number(numberString);
}
console.log(addNumandString(10, "5"));
//Q68
function Multiplydecimal(num1, num2) {
    return ((num1 * num2) * 100) / 100;
}
console.log(Multiplydecimal(0.2, 0.3));
//69
function divideAndRemainder(dividend, divisor) {
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    return { quotient, remainder };
}
console.log(divideAndRemainder(10, 3));
//Q70
function printNumber() {
    for (let i = 1; i >= 5; i++)
        console.log(i);
}
printNumber();
//71
let age = 17;
age = 17.5;
console.log(age);
const name = haseeb;
try {
    name = "hasham";
}
catch (error) {
    console.log("Error: cant ressign");
}
//72
{
    let blockLet = "visible inside the block";
    const blockConst = "also only inside the block";
    console.log(blockLet);
    console.log(blockConst);
}
try {
    console.log(blockLet);
}
catch (error) {
    console.log("`blockLet` is not accessible outside the block.");
}
try {
    console.log(blockConst);
}
catch (error) {
    console.log("`blockConst` is not accessible outside the block");
}
//73
function updateVariable() {
    let number = 48;
    console.log("initial value:", number);
    number = 34;
    console.log("uptadevalue:", number);
}
updateVariable();
//Q74
function swapValues() {
    let a = 5, b = 12;
    console.log("before swap a=", a, "b=", b);
    let temp = a;
    a = b;
    b = temp;
    console.log("After swap: a=", a, "b=", b);
}
swapValues();
//Q75
function useCompoundOperators() {
    let x = 9;
    console.log("Initial x:", x);
    x += 2;
    console.log("After addition:", x);
    x -= 1;
    console.log("After subtraction:", x);
    x *= 3;
    console.log("After multiplication:", x);
    x /= 2;
    console.log("After division:", x);
}
useCompoundOperators();
