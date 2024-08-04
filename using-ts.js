//  Compile the code with
//  tsc using-ts.ts
//  Run the code by opening index.html in browser.  F12, go to console to see output
console.log("**************************************************************");
//  for/next loop has three parts
//  First Part:       Do this before any iteration
//  Second Part:      Check this before each iteration
//  Third Part:       Do this after each iteration
console.log("* Loop 1:  ***************************************************");
for (var i_1 = 0; i_1 < 3; i_1++) {
    console.log("Block statement execution no." + i_1);
}
//------- This will not compile           console.log('Value of i:' + i);
console.log("* Loop 2:  ***************************************************");
var j = 0;
for (; j < 3; j++) {
    console.log("Block statement execution no." + j);
}
console.log('Value of j:' + j);
//  for...of loop to iterate and access elements of an array, list, or tuple collection. 
//  The for...of loop returns elements from a collection e.g. array, list or tuple, and so, there is no need 
//  to use the traditional for loop shown above.
console.log("* Loop 3:  ***************************************************");
var arr = [10, 20, 30, 40];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var val = arr_1[_i];
    console.log(val); // prints values: 10, 20, 30, 40
}
console.log("* Loop 4:  ***************************************************");
var str = "Hello World";
for (var _a = 0, str_1 = str; _a < str_1.length; _a++) {
    var char = str_1[_a];
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
for (var index2 in arr) {
    console.log(index2); // prints elements: 0, 1, 2, 3
}
//------- This will not compile           console.log(index2); //Compiler Error: Cannot find index2
//  While Loop
//  This loop will execute as long as the condition is true
//  condition Checked BEFORE the loop's iteration
//  NO guarentee that the loop will execute once 
console.log("* Loop 7:  ***************************************************");
var i = 2;
while (i < 4) {
    console.log("Block statement execution no." + i);
    i++;
}
//  Do While Loop
//  This loop will execute as long as the condition is true
//  condition Checked AFTER the loop's iteration
//  Guarentee that the loop will execute once 
console.log("* Loop 8:  ***************************************************");
var j = 2;
do {
    console.log("Block statement execution no." + j);
    j++;
} while (j < 4);
