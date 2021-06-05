function factorialIterative(number) {
  if (number < 0) return undefined;

  let total = 1;
  for (let n = number; n > 1; n--) {
    total = total * n;
  }

  return total;
}

console.log(factorialIterative(5)); // 120

function factorialRecursive(number) {
  // console.trace();
  if (number < 0) return undefined;
  if (number < 2) return number;

  return number * factorialRecursive(number - 1);
}

console.log(factorialRecursive(5)); // 120

// //////////////////////////////////////////

function fibonacciIterative(n) {
  if (n < 0) return undefined;

  const sequence = [0, 1, 1];
  if (n < 3) return sequence;

  for (let i = 2; i < n; i++) {
    const nextValue = sequence[i] + sequence[i - 1];
    sequence.push(nextValue);
  }

  return sequence;
}

console.log(fibonacciIterative(10));
// [
//   0, 1,  1,  2,  3,
//   5, 8, 13, 21, 34
// ]

function fibonacciRecursive(n) {
  if (n < 0) return undefined;
  if (n < 3) return 1;

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(10));

function fibonacciMemoization(n) {
  const memo = [0, 1];
  const fibonacci = (n) => {
    if (memo[n] != null) return memo[n];
    return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  };

  return fibonacci(n);
}

console.log(fibonacciMemoization(10));
