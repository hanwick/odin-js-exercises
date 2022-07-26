const sumAll = function(numOne, numTwo) {
    let total = 0;
    if (numOne < 0 || numTwo < 0) {
        return "ERROR";
    }
    else if (typeof(numOne) != "number" || typeof(numTwo) != "number") {
        return "ERROR";
    }
    else {
        if (numOne < numTwo) {
            for (let i = numOne; i <= numTwo; i++) {
                total += i; 
            }
            return total;
        }
        for (let i = numTwo; i <= numOne; i++) {
            total += i; 
        }
        return total;
        }
};

// Do not edit below this line
module.exports = sumAll;
