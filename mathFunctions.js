const mathFunctions = {};

mathFunctions.add = function(a, b) {
    return a + b;
};

mathFunctions.subtract = function (a, b) {
    return a - b;
};

mathFunctions.multiply = function(a, b) {
    return a * b;
};

mathFunctions.divide = function(a, b) {
    return a / b;
};

mathFunctions.evaluate = function(a, operand, b) {
    let result = undefined;
    if (operand === "+") {
        result = this.add(a, b);
    } else if (operand === "-") {
        result = this.subtract(a, b);
    } else if (operand === "*") {
        result = this.multiply(a, b);
    } else if (operand === "/") {
        result = this.divide(a, b);
    } 
    return result;
};

module.exports = mathFunctions;