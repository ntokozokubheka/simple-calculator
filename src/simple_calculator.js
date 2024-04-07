const { isValidNum } = require('./helper_functions.js')

const add = (...args) => {
  let total = 0
  for (const num of args) {
    isValidNum(num)
    total += parseFloat(num)
  }
  return total
}

const subtract = (...args) => {
  let total = 0
  for (const num of args) {
    isValidNum(num)
    total -= parseFloat(num)
  }
  return total
}

const multiply = (...args) => {
  let total = 1
  for (const num of args) {
    isValidNum(num)
    total *= parseFloat(num)
  }
  return total
}

const divide = (...args) => {
  let total = args[0]
  for (let i = 1; i < args.length; i++) {
    isValidNum(args[i])
    total /= parseFloat(args[i])
  }
  return total
}

module.exports = { add, multiply}