const arrayFlat = (inputArray) => {
  let resultString = "";
  // Corner case
  if (inputArray.length < 1) return resultString;

  let i = 0;
  // Loop to concat result
  while (i < inputArray.length) {
    if (Array.isArray(inputArray[i])) {
      resultString = resultString + arrayFlat(inputArray[i]);
    } else {
      resultString = resultString + inputArray[i];
    }
    i++;
  }
  return resultString;
};
const arrayFlatResult = arrayFlat([1, 2, [3, [4, 5, 6], 7], 8]);

console.log(arrayFlatResult);

//Output : 12345678
