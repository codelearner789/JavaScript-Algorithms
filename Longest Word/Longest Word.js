function findLongestWord(str) {
    let newStr = str.replace(/[\W_]/g, ' ').split(' ');
    let longestWord = '';
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i].length > longestWord.length) {
            longestWord = newStr[i];
        }
    }
    return longestWord;
}

console.log(findLongestWord("Ready, steady, go!"));
console.log(findLongestWord("Ready[[[, steady, go!"));
console.log(findLongestWord("ABCd"));