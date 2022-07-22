const prompt = require("prompt-sync")({ sigint: true });
const mathFunctions = require("./mathFunctions");
const validator = require("./validator");
const display = require("./display");


function main() {
    display.initTopIntro();
    let currentCommand = "n";
    let num1 = undefined;
    let num2 = undefined;
    while (currentCommand !== "quit") {
        display.newLineSpacing();
        if (num1 === undefined) num1 = prompt("What's the first number?: ");
        let operation = prompt("Pick an operation (+, -, *, /): ");
        num2 = prompt("What's the next number?: ");
        if (validator.validNum(num1) && validator.validNum(num2) && validator.validOperand(operation)) {
            let result = mathFunctions.evaluate(Number(num1), operation, Number(num2));
            display.showResultAndPromptUserToContinue(num1, operation, num2, result);
            currentCommand = prompt("Type 'quit' to exit: ");
            if (currentCommand === "y") num1 = result;
            if (currentCommand === "n") num1 = undefined;
            if (currentCommand !== "y" && currentCommand !== "n" && currentCommand !== "quit") {
                display.invalidCommand();
                break;
            }
        } else {
            display.invalidCommand();
            break;
        }
    }
}

main();