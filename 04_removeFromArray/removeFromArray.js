const removeFromArray = function (array, ...args) {
  let newArray = [];
  console.log(args);
  console.log(typeof args);
  for (let count = 0; count < array.length; count++)
    if (!args.includes(array[count])) {
      newArray.push(array[count]);
    }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
