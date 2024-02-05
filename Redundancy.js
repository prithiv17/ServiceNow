const isRedundancy = (inputString) => {
  // Corner case
  if (!inputString) return false;
  const inputArray = inputString.split("");
  const stackArray = [];
  let finalFlag = false;
  //Looping all character
  inputArray.forEach((character) => {
    if (character === ")" && !flag) {
      let poppedValue = "";
      var flag = true;
      //Looping to find redundancy
      while (stackArray.length != 0 && poppedValue !== "(") {
        poppedValue = stackArray.pop();
        if (["+", "-", "*", "/"].includes(poppedValue)) {
          flag = false;
        }
      }
      if (flag) finalFlag = flag;
    } else {
      stackArray.push(character);
    }
  });
  return finalFlag;
};

const redundancyStatus = isRedundancy("(a+(b)/c)") ? "Yes" : "No";

console.log(redundancyStatus);

//Output : Yes
