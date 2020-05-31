function isDigit(str) {
    const digits = ["0","1","2","3","4","5","6","7","8","9"];
    return digits.includes(str);

}

console.log(isDigit('3'));
console.log(isDigit('d'));