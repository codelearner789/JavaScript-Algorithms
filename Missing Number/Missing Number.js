function findMissingNumber(numList) {
    const sortedList = numList.sort((a, b) => {return a - b});
    let result = 0;
    let curNum = 0;
    for (let i = 0; i < numList.length; i++) {
        if (!sortedList.includes(curNum)) {
            result = curNum;
        }
        curNum++;

    }
    return result;
}

console.log(findMissingNumber([0,3,5,8,4,6,1,9,7]));
console.log(findMissingNumber([1,2,5,0,6,7,9,3,4]));