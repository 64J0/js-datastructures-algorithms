import Stack from '../../src/js/data-structures/stack.js';

function decimalToBinary(decNumber) {
  const remStack = new Stack();
  let number = decNumber;
  let rem;
  let binaryString = '';

  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}

console.log('10 em binário => ', decimalToBinary(10)); // 1010
console.log('11 em binário => ', decimalToBinary(11)); // 1011
console.log('12 em binário => ', decimalToBinary(12)); // 1100
