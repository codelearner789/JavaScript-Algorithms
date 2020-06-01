function sumOfDiff(numArr) {
    let min = Math.min(...numArr);
    let max = Math.max(...numArr);
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(sumOfDiff([10,5]));
console.log(sumOfDiff([3, 7]));