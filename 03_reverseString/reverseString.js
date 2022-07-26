const reverseString = function(inputString) {
    const splitString = inputString.split("");
    const reversedArray = [];
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedArray.push(splitString[i]);
    }
    let reversedStringCommas = reversedArray.toString();
    let finalReversedString = reversedStringCommas.replaceAll(",", "");
    return finalReversedString;
};

// Do not edit below this line
module.exports = reverseString;
