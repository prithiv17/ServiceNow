/** Start deep clone using Stringify */
// var obj = {
//   a: 1,
//   b: {
//     c: 2,
//   },
// };
// var newObj = JSON.parse(JSON.stringify(obj));
// obj.b.c = 20;

// console.log(obj); // { a: 1, b: { c: 20 } }
// console.log(newObj); // { a: 1, b: { c: 2 } }

/** End deep clone using Stringify */

/** Start deep clone using recursive method */
function cloneObject(obj) {
  var clone = {};
  for (var i in obj) {
    if (obj[i] != null && typeof obj[i] == "object")
      clone[i] = cloneObject(obj[i]);
    else clone[i] = obj[i];
  }
  return clone;
}

var obj = {
  a: 1,
  b: {
    c: 2,
  },
};
var newObj = cloneObject(obj);
obj.b.c = 20;

console.log(obj); // { a: 1, b: { c: 20 } }
console.log(newObj); // { a: 1, b: { c: 2 } }

/** End deep clone using recursive method */
