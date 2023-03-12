////// цикл while

// Setup
const myArray = [];
let i = 5;

while (i > -1){
  myArray.push(i);
  i--;
}
console.log(myArray)
// Only change code below this line


////// цикл for

// Setup
const myArray1 = [];

for(let i=1; i<6; i++){
  myArray1.push(i);
}
console.log(myArray1)
// Only change code below this line

/////// Нечетные числа в массиве


// Setup
const myArray2 = [];

for (let i = 1; i < 10; i +=2){
  myArray2.push(i);
}
console.log(myArray2)
// Only change code below this line

///////for убывание

// Setup
const myArray3 = [];
for(let i=9; i>0; i-=2){
  myArray3.push(i);
}

// Only change code below this line


//////перебор элементов массива


// Setup
const myArr4 = [2, 3, 4, 5, 6];
let total = 0;

for(let i = 0; i < myArr4.length; i++){
total += myArr4[i];
};



// Only change code below this line

/////// вложенные элемент массива


function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
for(let i=0; i<arr.length; i++){
  for(let j=0; j<arr[i].length; j++){
   product *= arr[i][j]
  }
}
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);


//////

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
for(let i=0; i<arr.length; i++){
  for(let j=0; j<arr[i].length; j++){
   product *= arr[i][j]
  }
}
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);