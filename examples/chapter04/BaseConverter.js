import Stack from '../../src/js/data-structures/stack.js';

// base 2 a 36
function baseConverter(decNumber, base) {
  const remStack = new Stack();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let number = decNumber;
  let rem;
  let baseString = '';

  if (!(base >= 2 && base <= 36)) {
    console.error('Invalid base range, please inform a number between 2 and 36');
    return '';
  }

  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }

  return baseString;
}

console.log('10 na base 8 => ', baseConverter(10, 8)); // 12
console.log('10 na base 16 => ', baseConverter(10, 16)); // A
