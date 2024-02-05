const mergeArrays = (inputArray1, inputArray2) => {
  const mergeResult = [];
  let i = 0;
  let j = 0;
  // Looping to compare and insert result
  while (i < inputArray1.length && j < inputArray2.length) {
    if (inputArray1[i] < inputArray2[j]) {
      mergeResult.push(inputArray1[i++]);
    } else {
      mergeResult.push(inputArray2[j++]);
    }
  }
  // Looping to insert remaining inputArray1's  values into result
  while (i < inputArray1.length) {
    mergeResult.push(inputArray1[i++]);
  }
  // Looping to insert remaining inputArray2's  values into result
  while (j < inputArray2.length) {
    mergeResult.push(inputArray2[j++]);
  }

  return mergeResult;
};

const mergeResult = mergeArrays([1, 3, 5, 7], [2, 4, 6, 8]);

console.log(mergeResult);

//Output : [1, 2, 3, 4,5, 6, 7, 8]
