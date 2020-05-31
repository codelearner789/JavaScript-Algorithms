function titleCase(str) {
    wordsInStr = str.split(' ').map((element) => {
        return element.charAt(0).toUpperCase() + element.substr(1);
    });

return wordsInStr.join(' ');
}

console.log(titleCase('I am a coding god'));
console.log(titleCase('I would like to work for Google'));
console.log(titleCase('I wish I were as rich as Bill Gates'));