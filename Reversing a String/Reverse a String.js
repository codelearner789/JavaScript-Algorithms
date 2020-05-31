function reverseString(word) {
    allLetters = word.split('');
    reversedLetters = allLetters.reverse();
    result = reversedLetters.join('');
    return result;
}

console.log(reverseString('Brook Chen'));
console.log(reverseString('cat'));
console.log(reverseString("dog"));