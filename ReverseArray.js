/** Start reverse an array using built-in method */

// const inputArray = [10,1,12,3,4];
// inputArray.reverse();
// console.log(inputArray);

/** End reverse an array using built-in method */

/** Start reverse an array using loop */

const inputArray = [10, 1, 12, 3, 4];
let loopCount = 0;
while (loopCount < inputArray.length) {
  let lastElement = inputArray.pop();
  inputArray.splice(loopCount, 0, lastElement);
  loopCount++;
}
console.log(inputArray);

// Output : [ 4, 3, 12, 1, 10 ]

/** End reverse an array using loop */
