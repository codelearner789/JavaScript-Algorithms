function isPalindrome(word) {
    let isPal = true;
    let lowerWord = word.toLowerCase().replace(/[\W_]/g, '');
    lettersInWord = lowerWord.split('').reverse().join('');
    
    return lettersInWord === lowerWord;
}

console.log(isPalindrome('A man, a plan, a canal. Panama'));
console.log(isPalindrome('_codegod'));