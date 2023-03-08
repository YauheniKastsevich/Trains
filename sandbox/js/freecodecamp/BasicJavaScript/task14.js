const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();
//
const myArray1 = [["John", 23], ["dog", 3]];
const removedFromMyArray1 = myArray1.shift();
//
const myArray2 = [["John", 23], ["dog", 3]];
myArray2.shift();
myArray2.unshift(["Paul", 35]) ;
//
const myList = [
    ['chocolate', 3],
    ['milk', 1],
    ['bread', 1],
    ['coffe', 2],
    ['sugar', 10]
  ];
  //
  function reusableFunction(){
    console.log("Hi World")
  }
  reusableFunction();
  //
  function functionWithArgs(param1, param2){
    console.log(param1 + param2);
  };
  functionWithArgs(1, 2);
  //
  function timesFive(num){
    return num * 5;
  }
  let answer = timesFive(5);
  //
  // Declare the myGlobal variable below this line
let myGlobal;
myGlobal = 10;
function fun1() {
  // Assign 5 to oopsGlobal here
return oopsGlobal = myGlobal-5;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
//



