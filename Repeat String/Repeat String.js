function repeatString(str, numTimes) {
    let result = '';
    let num = 0;
    while (num < numTimes) {
        num++;
        result = result.concat(str);
    }
    return result;
}

console.log(repeatString('codinggod', 2));
console.log(repeatString('google', 3));