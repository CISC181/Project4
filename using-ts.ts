//  Compile the code with
//  tsc using-ts.ts
//  Run the code by opening index.html in browser.  F12, go to console to see output
console.log("**************************************************************");


//  for/next loop has three parts
//  First Part:       Do this before any iteration
//  Second Part:      Check this before each iteration
//  Third Part:       Do this after each iteration


console.log("* Loop 1:  ***************************************************");
for (let i = 0; i < 3; i++) {
  console.log ("Block statement execution no." + i);
}
//------- This will not compile           console.log('Value of i:' + i);

console.log("* Loop 2:  ***************************************************");
let j = 0;
for (; j < 3; j++) {
  console.log ("Block statement execution no." + j);
}
console.log('Value of j:' + j);

//  for...of loop to iterate and access elements of an array, list, or tuple collection. 
//  The for...of loop returns elements from a collection e.g. array, list or tuple, and so, there is no need 
//  to use the traditional for loop shown above.
console.log("* Loop 3:  ***************************************************");
let arr = [10, 20, 30, 40];

for (var val of arr) {
  console.log(val); // prints values: 10, 20, 30, 40
}

console.log("* Loop 4:  ***************************************************");
let str = "Hello World";
for (var char of str) {
  console.log(char); // prints chars: H e l l o  W o r l d
}



//  for..in loop
//  Another form of the for loop is for...in. This can be used with an array, list, or tuple. 
//  The for...in loop iterates through a list or collection and returns an index on each iteration.

console.log("* Loop 5:  ***************************************************");
arr = [10, 20, 30, 40];
for (var index in arr) {
  console.log(index); // prints indexes: 0, 1, 2, 3
  console.log(arr[index]); // prints elements: 10, 20, 30, 40
}

console.log("* Loop 6:  ***************************************************");
arr = [10, 20, 30, 40];

for (var index1 in arr) {
  console.log(index1); // prints indexes: 0, 1, 2, 3
}

//------- This will not compile           console.log(index1); //OK, prints 3 

for (let index2 in arr) {
  console.log(index2); // prints elements: 0, 1, 2, 3
}

//------- This will not compile           console.log(index2); //Compiler Error: Cannot find index2