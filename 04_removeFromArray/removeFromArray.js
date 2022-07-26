const removeFromArray = function(...args) {
    const arrayEdit = args[0];
    for (let i = 1; i < args.length; i++) {
        for (let j = 0; j < arrayEdit.length; j++) {
            if (arrayEdit[j] === args[i]) {
                arrayEdit.splice(j,1);
            }
        }
    }
    return arrayEdit;
}


// Do not edit below this line
module.exports = removeFromArray;
