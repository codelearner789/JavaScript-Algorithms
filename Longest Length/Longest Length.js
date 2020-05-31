function findLongestLength(str) {
    let wordsInStr = str.split(' ');
    let lengthOfWords = [];
    for (let i = 0; i < wordsInStr.length; i++) {
        lengthOfWords.push(wordsInStr[i].length);
    }
    let sortedList = lengthOfWords.sort((a, b) => {return b - a});
    return sortedList[0];

}

console.log(findLongestLength('I am a coding god'));
console.log(findLongestLength('I would like to work for Google'));
console.log(findLongestLength('Ain\'t no fun if the homie don\'t code'));