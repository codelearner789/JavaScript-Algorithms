function giveIntroduction(firstName, lastName) {
    let fullName = `${firstName} ${lastName}`;
    return "Hi my name is " + fullName + ".";
}

console.log(giveIntroduction('Brook', 'Chen'));
console.log(giveIntroduction('John', 'Wilson'));