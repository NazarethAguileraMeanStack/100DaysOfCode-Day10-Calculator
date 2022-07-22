let display = {};

display.calcArt = `
__________
| ________ |
||12345678||
|""""""""""|
|[M|#|C][-]|
|[7|8|9][+]|
|[4|5|6][x]|
|[1|2|3][%]|
|[.|O|:][=]|
|__________|`;

display.initTopIntro = function() {
    console.clear();
    console.log(this.calcArt);
};

display.newLineSpacing = function() {
    console.log("\n");
};

display.showResultAndPromptUserToContinue = function(num1, operation, num2, result) {
    console.log(`${num1} ${operation} ${num2} = ${result}`);
    console.log("\n");
    console.log(`Type 'y' to continue calculating with ${result}, or type 'n' to start a new calculation.`);
};

display.invalidCommand = function() {
    console.error("Invalid Command");
};























module.exports = display;