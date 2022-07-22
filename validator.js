function validNum(str) {
    if (Number(str)) return true;
    return false;
}

function validOperand(operand) {
    if (operand === "+") return true;
    if (operand === "-") return true;
    if (operand === "*") return true;
    if (operand === "/") return true;
    return false;
}

exports.validNum = validNum;
exports.validOperand = validOperand;