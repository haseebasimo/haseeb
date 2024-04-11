#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var todos = [];
var loop = true;
while (loop) {
    var Answers = await inquirer_1.default.prompt([{
            name: "TODO",
            type: "input",
            message: "what you want to add in your todo?",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more?",
            default: "false",
        }
    ]);
    var TODO = Answers.TODO, addMore = Answers.addMore;
    loop = addMore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("kindly add valid input!");
    }
}
if (todos.length > 0) {
    console.log("your todo list");
    todos.forEach(function (TODO) { console.log(TODO); });
}
else {
    console.log("No todos found");
}
