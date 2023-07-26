const fibonacci = function (n) {
  const fibo = [1, 1];
  for (let i = 2; i < n; i++) {
    fibo[i] = fibo[i - 2] + fibo[i - 1];
  }
  return fibo[n];
};

// Do not edit below this line
module.exports = fibonacci;
