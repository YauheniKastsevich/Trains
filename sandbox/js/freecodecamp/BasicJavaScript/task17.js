////// Object

const myDog = {
    // Only change code below this line
  name:"Baron",
  legs: 4,
  "tails": 1,
  'friends': ["I", "My cat", "Mom"]
    // Only change code above this line
  };

  ////// доступ к объекту через точку

  // Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  const hatValue = testObj.hat;      // Change this line
  const shirtValue = testObj.shirt;    // Change this line

  //////доступ к объекту через []

  // Setup
const testObj1 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  const entreeValue = testObj1["an entree"];   // Change this line
  const drinkValue = testObj1["the drink"];    // Change this line

  ////// использование переменной для доступа к объекту

// Setup
const testObj2 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  const playerNumber = 16;  // Change this line
  const player = testObj2[playerNumber];   // Change this line

  //////изменение имени объекта

// Setup
const myDog1 = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  // Only change code below this line
  myDog1.name = "Happy Coder";

  ///// добавление свойства к объекту

  const myDog2 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  myDog2.bark = "woof";

  //////удаление свойства объекта

  // Setup
const myDog3 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  
  // Only change code below this line
  delete myDog3.tails;

  ////// Использование объектов для поиска

  // Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = lookup[val];

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

///////


  