function findFirstDuplicate(numArr) {
    let duplicate = -1;
    let initNum = numArr[0];
    for (let i = 1; i < numArr.length; i++) {
        if (numArr[i] === initNum) {
            return initNum;
        } else {
            initNum = numArr[i];
        }
    }
    return duplicate;

}

function findFirstDuplicate2(numArr) {
    let duplicateObject = {};
    for(let num of numArr) {
        if (duplicateObject.hasOwnProperty(num)) {
            return num;
        }
        duplicateObject[num] = num;
    }
    return - 1;
}

console.log(findFirstDuplicate2([2, 3, 3, 1, 5, 2]));
console.log(findFirstDuplicate2([2, 2]));
console.log(findFirstDuplicate2([2, 1, 3]));