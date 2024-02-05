const reverseString = (stringValue) => {
  return stringValue ? stringValue.split("").reverse().join("") : "";
};

const isPalindrome = (inputString) => {
  // Corner case
  if (!inputString) return false;
  // reverse the input string
  let reversedString = reverseString(inputString.toString());

  return inputString === reversedString ? true : false;
};

const palindromeStatus = isPalindrome("madam")
  ? "Palindrome"
  : "Not a palindrome";

console.log(palindromeStatus);

// Output : Palindrome
