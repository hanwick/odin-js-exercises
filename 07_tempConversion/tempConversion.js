const ftoc = function(degreesF) {
  let num1 = (degreesF - 32) * (5/9);
  let resultC = num1.toFixed(1);
  return Number(resultC);
};

const ctof = function(degreesC) {
  let num1 = degreesC * (9/5) + 32;
  let resultF = num1.toFixed(1);
  return Number(resultF);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
