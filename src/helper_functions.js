const isValidNum = (arg) => {
  if (!typeof arg === "number") {
    throw new Error(`argument ${arg} is not valid.`);
  }
};

const isValidArgList = (arg) => {
  if (!arg) {
    throw new Error(`empty argument list is not allowed.`);
  }
};

module.exports = { isValidNum ,isValidArgList };
