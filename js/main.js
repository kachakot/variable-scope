// DEFINING A FUNCTION
console.log('DEFINING A FUNCTION')

var square = function(x) {
  return x * x;
};

console.log(square(12)); // 144


var makeNoise = function() {
  console.log("Hello!");
};

makeNoise(); // Hello!

var power = function(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
};

console.log(power(2, 10));
// → 1024


console.log('\n')


// PARAMETERS AND SCOPES
console.log('PARAMETERS AND SCOPES')

var x = "outside"; // global variable

var f1 = function() {
  var x = "inside f1"; // local variable
};
f1();
console.log(x);
// → outside

var f2 = function() {
  x = "inside f2";
};
f2();
console.log(x);
// → inside f2


console.log('\n')


// NESTED SCOPE
console.log('NESTED SCOPE')

var landscape = function() {
  var result = "";
  var flat = function(size) {
    for (var count = 0; count < size; count++)
      result += "_";
  };
  var mountain = function(size) {
    result += "/";
    for (var count = 0; count < size; count++)
      result += "'";
    result += "\\";
  };

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};

console.log(landscape());
// → ___/''''\______/'\_


console.log('\n')


// FUNCTIONS AS VALUES
console.log('FUNCTIONS AS VALUES')

var launchMissiles = function(value) {
  missileSystem.launch("now");
};
// if (safeMode)
//   launchMissiles = function(value) {/* do nothing */};


console.log('\n')


// DECLARATION NOTATION
console.log('DECLARATION NOTATION')

function square(x) {
  return x * x;
}


console.log("The future says:", future());

function future() {
  return "We STILL have no flying cars.";
}

function example() {
  function a() {} // Okay
  if (something) {
    function b() {} // Danger!
  }
}


console.log('\n')


// THE CALL STACK
function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");


// function chicken() {
//   return egg();
// }
// function egg() {
//   return chicken();
// }
// console.log(chicken() + " came first.");
// // → ??


console.log('\n')


// OPTIONAL ARGUMENTS
console.log('OPTIONAL ARGUMENTS')
alert("Hello", "Good Evening", "How do you do?");

function power2(base, exponent) {
  if (exponent == undefined)
    exponent = 2;
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
}

console.log(power2(4));
// → 16
console.log(power2(4, 3));
// → 64

console.log("R", 2, "D", 2);
// → R 2 D 2


console.log('\n')


// CLOSURE
console.log('CLOSURE')

function wrapValue(n) {
  var localVariable = n;
  return function() { return localVariable; };
}

function wrapValue(n) {
  return function() {
    return n;
  };
}


var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2


function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

var twice = multiplier(2);
console.log(twice(5));
// → 10



console.log('\n')


// RECURSION
console.log('RECURSION')

function power(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * power(base, exponent - 1);
}

console.log(power(2, 3));
// → 8


function findSolution(target) {
  function find(start, history) {
    if (start == target)
      return history;
    else if (start > target)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)


console.log('\n')


// GROWING FUNCTIONS
console.log('GROWING FUNCTIONS')

function printFarmInventory(cows, chickens) {
  var cowString = String(cows);
  while (cowString.length < 3)
    cowString = "0" + cowString;
  console.log(cowString + " Cows");
  var chickenString = String(chickens);
  while (chickenString.length < 3)
    chickenString = "0" + chickenString;
  console.log(chickenString + " Chickens");
}
printFarmInventory(7, 11);


function printZeroPaddedWithLabel(number, label) {
  var numberString = String(number);
  while (numberString.length < 3)
    numberString = "0" + numberString;
  console.log(numberString + " " + label);
}

function printFarmInventory(cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, "Cows");
  printZeroPaddedWithLabel(chickens, "Chickens");
  printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory(7, 11, 3);


function zeroPad(number, width) {
  var string = String(number);
  while (string.length < width)
    string = "0" + string;
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(zeroPad(cows, 3) + " Cows");
  console.log(zeroPad(chickens, 3) + " Chickens");
  console.log(zeroPad(pigs, 3) + " Pigs");
}

printFarmInventory(7, 16, 3);


console.log('\n')


// SUMMARY
console.log('SUMMARY')

// Create a function value f
var f = function(a) {
  console.log(a + 2);
};

// Declare g to be a function
function g(a, b) {
  return a * b * 3.5;
}
console.log(f)
console.log(f(2))
console.log(g(2,2))


console.log('\n')


// EXERCISE
console.log('EXERCISES')

console.log('MINIMUM')
function min(a,b) {
  return Math.min(a,b)
}

console.log(min(0, 10))
console.log(min(0, -10))

console.log('\n')

console.log('RECURSION')
function isEven(number){
    if(number === 0) {
        return true
    } else if (number === 1) {
        return false
    } else {
        return isEven(number - 2)
    }
}

console.log(isEven(50))
console.log(isEven(75))
// console.log(isEven(-1))

console.log('\n')

function isEven2(number) {
    if(number === 0) {
        return true
    } else if (number === 1) {
        return false
    } else if (number < 0) {
      return 'Wrong value'
    } else {
        return isEven2(number - 2)
    }
}

console.log(isEven2(50))
console.log(isEven2(75))
console.log(isEven2(-1))

console.log('\n')

console.log('BEAN COUNTING')
function countBs(string) {
  var counter = 0
  var i
  for (i = 0; i < string.length; i++) {
    if(string[i] === 'B') {
      console.log(string[i])
      counter++
    }
  }
  return counter
}

function countChar(string, letter) {
  var counter = 0
  var i
  for (i = 0; i < string.length; i++) {
    if(string[i] === letter) {
      console.log(string[i])
      counter++
    }
  }
  return counter
}

console.log(countBs('BBC'))
console.log(countChar('kakkerlak', 'k'))