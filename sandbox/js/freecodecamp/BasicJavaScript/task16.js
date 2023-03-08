////// else

function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    }else{
      return "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
  testElse(4);

  ////// else if

  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
    else if (val < 5) {
      return "Smaller than 5";
    }
  else{
    return "Between 5 and 10";
  }}
  
  testElseIf(7);

  //////

  function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(7);
  /////// if else chain
  function testSize(num) {
    // Only change code below this line
  if(num<5){
    return "Tiny"
  } else if(num<10){
     return "Small"
  } else if(num<15){
     return "Medium"
  } else if(num<20){
     return "Large"
  } else {
     return "Huge"
  }
  
    
    // Only change code above this line
  }
  
  testSize(7);


  ////// GOlf


  const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

  function golfScore(par, strokes) {
    // Only change code below this line
  if(strokes == 1){
    return "Hole-in-one!"
  }else if(strokes <= par-2){
    return "Eagle"
  }else if(strokes <= par - 1	){
    return "Birdie"
  }else if(strokes == par){
    return "Par"
  }else if(strokes == par + 1){
    return "Bogey"
  }else if(strokes == par+2){
    return "Double Bogey"
  }else if(strokes >= par+3){
    return "Go Home!"
  }
    // Only change code above this line
  }
  
  golfScore(5, 4);

  ////// swith case

  function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
      case 1:
       answer = "alpha";
      break;
      case 2:
       answer = "beta";
      break;
      case 3:
       answer = "gamma";
      break;
      case 4:
       answer = "delta";
      break;
      }
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch(1);

////// default

function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;
      default:
        answer = "stuff";
        break;
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  switchOfStuff(1);

  ////// CASE

  function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch (val){
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9:
        answer = "High";
        break;
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  sequentialSizes(1);

  ////// if else switch case

  function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
  
    switch (val) {
      case "bob":
      answer = "Marley";
      break;
      case 42:
      answer = "The Answer";3
      break;
      case 1:
      answer = "There is no #1";
      break;
      case  99:
      answer = "Missed me by this much!";
      break;
      case 7:
      answer = "Ate Nine";
      break;
    }
  
    // Only change code above this line
    return answer;
  }
  
  chainToSwitch(7);

  ////// Чтоб не использовать else IF

  function isLess(a, b) {
    // Only change code below this line
     return a < b;
    }
    // Only change code above this line
  
  
  isLess(10, 15);

  ////// return undefined

// Setup
function abTest(a, b) {
    // Only change code below this line
  if(a<0||b<0)
    return undefined
  
  
  
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2,2);

  ////// Pocker task

  let count = 0;

function cc(card) {
  // Only change code below this line
 switch(card){
   case 2:
   case 3:
   case 4:
   case 5:
   case 6:
   count ++;
   break;
   case 10:
   case "J":
   case "Q":
   case "K":
   case "A":
   count --;
   break; 
 }
  if(count<=0){
  return count + " Hold"}
  else{
    return count + " Bet"
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

//////

