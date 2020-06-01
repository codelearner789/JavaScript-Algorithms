function uniqueValues(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            result.push(arr2[i]);
        }
    }
    return result;
}

console.log(uniqueValues([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(uniqueValues([1, "calf", 3, "piglet"], [7, "filly"]));
console.log(uniqueValues([2, 1, 3], [3, 2, 1]));