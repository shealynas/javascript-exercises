const removeFromArray = function (array, removed) {
  let newArray = [];
  for (let count = 0; count < array.length; count++)
    if (array[count] !== removed) {
      newArray.push(array[count]);
    }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
