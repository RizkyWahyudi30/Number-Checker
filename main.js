function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}

function isNegative(number) {
  if (number < 0) {
    return true;
  } else {
    return false;
  }
}

function isZero(number) {
  if (number === 0) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function describeNumber(number) {
  let positive = isPositive(number);
  let negative = isNegative(number);
  let zero = isZero(number);
  let even = isEven(number);

  let odd;
  if (number % 2 !== 0) {
    odd = true;
  } else {
    odd = false;
  }

  let objNum = {
    positive: positive,
    negative: negative,
    zero: zero,
    even: even,
    odd: odd,
  };

  return objNum;
}

console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(7));
