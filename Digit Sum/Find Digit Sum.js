function findDigitSum(str) {
    let sum = 0;
    let listWords = str.match(/\d+/g) || [];
    for (let i = 0; i < listWords.length; i++) {
        sum += Number(listWords[i]);
    }
    return sum;
}

console.log(findDigitSum('2 apples, 12 oranges'));
console.log(findDigitSum('123450'));
console.log(findDigitSum('Your payment method is invalid'));