const repeatString = function(stringRepeat, numRepeat) {
    if (numRepeat < 0) {
        return "ERROR";
    }
    let newString = "";
    for (let i = 0; i < numRepeat; i++) {
        newString += stringRepeat;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
