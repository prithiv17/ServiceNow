function findMissing(arr, target) {
  var count = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] <= target + count) count++;
    else return target + count;
  }
}

console.log(findMissing([3, 4, 7, 11], 3));

//Output : 5
