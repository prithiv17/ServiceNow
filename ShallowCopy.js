//Object declared
var obj1 = {
  id: 1,
  company: "GFG",
};
//Shallow copy the object using spread operator
var obj2 = { ...obj1 };
obj2.id = 2;
console.log(obj1.id); // Output : 1
console.log(obj2.id); // Output : 2
