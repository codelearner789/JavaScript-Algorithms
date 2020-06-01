function addAllDigits(num) {
    let tempNum = num;
    let numInString = num.toString().split('');
    let sum = numInString.reduce((a, b) => {
        return parseInt(a) + parseInt(b)});
    return sum;
}

console.log(addAllDigits(29));
console.log(addAllDigits(48));
console.log(addAllDigits(555));