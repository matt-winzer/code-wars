function validatePIN (pin) {
  return (pin.length === 4 || pin.length === 6) && pin.split('').filter(digit => {
    return digit.charCodeAt() < 47 || digit.charCodeAt() > 58
  }).length === 0
}

console.log(validatePIN('1346'));
