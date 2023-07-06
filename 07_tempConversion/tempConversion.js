// i: temperature that is a number
// o: number
// c: number rounded to one decimal place
const convertToCelsius = function (temp) {
  const raw = (temp - 32) / 1.8;
  return parseFloat(raw.toFixed(1));
};
const convertToFahrenheit = function (temp) {
  const raw = temp * (9 / 5) + 32;
  return parseFloat(raw.toFixed(1));
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
