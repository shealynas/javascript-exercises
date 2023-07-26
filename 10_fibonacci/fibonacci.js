const fibonacci = function (n) {
  if (n < 0) return "OOPS";
  const fibo = [0, 1];
  for (let i = 1; i < n; i++) {
    fibo.push(fibo[i] + fibo[i - 1]);
  }
  return fibo[n];
};

// Do not edit below this line
module.exports = fibonacci;
