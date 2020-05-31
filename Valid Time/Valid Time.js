function isValidTime(str) {
    let strTime = str.split(':');
    let hours = Number(strTime[0]);
    let minutes = Number(strTime[1]);
    let isValid = true;
    if (strTime.length > 2) {
        isValid = false
    } else if (hours >= 24 || minutes >= 60) {
        isValid = false;
    } 
    return isValid;
}

console.log(isValidTime('24:00'));
console.log(isValidTime('23:31'));
console.log(isValidTime('22:00'));
console.log(isValidTime('22:60'))