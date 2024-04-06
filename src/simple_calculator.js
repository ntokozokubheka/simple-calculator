const { isValidNum } = require("./helper_functions.js");

const add = () => {
  let total = 0;

  for (const num of arguments) {
    isValidNum(num);
    total += parseFloat(num);
  }

  return total;
};

const subtract = () => {
    let total = 0;
  
    for (const num of arguments) {
      isValidNum(num);
      total -= parseFloat(num);
    }
  
    return total;
  };

const multiply = () => {
  let total = 1;

  for (const num of arguments) { 
    isValidNum(num);
    total *= num;
  }

  return parseFloat(total);
};

const divide = () => { 
   let total = 1;

    for (const num of arguments) { 
      isValidNum(num);
      total /= num;
    }

    return total
};

module.exports = { add, multiply };