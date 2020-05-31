function hasDuplicates(numArray) {
    let sortedArr = numArray.sort((a,b) => {return a - b});
    let duplicatesExist = false;
    for (let i = 0; i < numArray.length - 1; i++) {
        if (numArray[i] === numArray[i + 1]) {
            duplicatesExist = true;
        }
    }
    return duplicatesExist;
}

console.log(hasDuplicates([1,2,3,1]));
console.log(hasDuplicates([3,1]));
console.log(hasDuplicates([0,4,5,0,3,6]));