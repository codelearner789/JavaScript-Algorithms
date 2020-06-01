function amendSentence(str) {
    let allLetters = str.split("");
    let word = allLetters[0];
    let words = [];
    for (let i = 1; i < allLetters.length; i++){
        if (allLetters[i] !== allLetters[i].toLowerCase()) {
            words.push(word);
            word = allLetters[i];
        } else {
            word = word.concat(allLetters[i]);
        }
    }
    words = words.join(' ').toLowerCase();
    return words;
}

function amendSentence2(str) {
    let stringArray = str.split("");
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i] !== stringArray[i].toLowerCase()) {
            stringArray[i] = stringArray[i].toLowerCase();
            stringArray.splice(i, 0, " ");
        }
    }
    stringArray = stringArray.join("").trim();
    return stringArray;
}

console.log(amendSentence('CodingGodDoesWorkSon'));
console.log(amendSentence("Ain'tNoFunIfTheHomieDon'tCodeNone"));