//////возврат случайного числа

function randomFraction() {

    // Only change code below this line
  
    return Math.random();
  
    // Only change code above this line
  }

  ////// генерация случайных чисел в диапазоне

  function randomWholeNum() {

    // Only change code below this line
  
    return Math.floor(Math.random() *10);
  }

  //////генерация случайных чисел в заданном диапазоне

  function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random()*(myMax-myMin+1))+myMin;
    // Only change code above this line
  }

  ////// parseInt анализирует строку и возвращает целое число

  function convertToInteger(str) {
    return parseInt(str);
    }
    
    convertToInteger("56");


///////parseInt(string, radix) преобразует двоичное число в целое

function convertToInteger(str) {
    return parseInt(str, 2);
    }
    
    convertToInteger("10011");

//////the Conditional (Ternary) Operator условный оператор


function checkEqual(a, b) {
    return a == b ? "Equal" : "Not Equal";
  }
  
  checkEqual(1, 2);

////// несколько условных операторов

function checkSign(num) {
    return (num === 0) ? "zero"
    : (num>0) ? "positive"
    : "negative";
  }
  
  checkSign(10);

  //////Use Recursion to Create a Countdown


// Only change code below this line
function countdown(n) {  
  if (n < 1) {
   return [];
 } else {
   const countArray = countdown(n - 1);
   countArray.unshift(n);
   return countArray;
 }
}
console.log(countdown(5));
// Only change code above this line

//////


