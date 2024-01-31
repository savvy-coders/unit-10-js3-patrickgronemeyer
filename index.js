// JavaScript Coding Challenge

// 1. Create a function named 'createPerson' that returns an object named 'person' using object literal syntax. The object should have properties 'name' and 'age', with your name and age as the values.


// 2. Create a function 'logPersonProperties' that takes a 'person' object as an argument and returns the 'name' and 'age' properties of the 'person' object using dot notation.


// 3. Create a function 'modifyAge' that takes a 'person' object and a new age as arguments, modifies the 'age' property of the 'person' object to the new age, and returns the updated object.


// 4. Create a function 'addJob' that takes a 'person' object and a job as arguments, adds a new property 'job' to the 'person' object with the job as its value, and returns the updated object.


// 5. Create a function 'deleteAge' that takes a 'person' object as an argument, deletes the 'age' property from the 'person' object, and returns the updated object.


// 6. Create a function 'addGreet' that takes a 'person' object as an argument, adds a method 'greet' to the 'person' object that returns a greeting message using the 'name' property, and calls the 'greet' method.


// 7. Create a function 'createNumbersArray' that returns an array named 'numbers' with five numbers of your choice.


// 8. Create a function 'logFirstAndThird' that takes a 'numbers' array as an argument and returns the first and third elements of the 'numbers' array using their indices.


// 9. Create a function 'modifySecond' that takes a 'numbers' array and a new number as arguments, modifies the second element of the 'numbers' array to the new number, and returns the updated array.


// 10. Create a function 'logLength' that takes a 'numbers' array as an argument and returns its length.


// 11. Create a function 'iterateWithFor' that takes a 'numbers' array as an argument and uses a for loop to iterate over the 'numbers' array and return each element.


// 12. Create a function 'iterateWithWhile' that takes a 'numbers' array as an argument and uses a while loop to iterate over the 'numbers' array and return each element.


// 13. Create a function 'iterateWithForOf' that takes a 'numbers' array as an argument and uses a for...of loop to iterate over the 'numbers' array and return each element.


// 14. Create a function 'createJSON' that takes a 'person' object as an argument, creates a JSON string named 'json' representing the 'person' object, and returns the JSON string.


// 15. Create a function 'parseJSON' that takes a 'json' string as an argument, parses the 'json' string into a JavaScript object, and returns the object.


// 16. Create a function 'stringifyPerson' that takes a 'person' object as an argument, stringifies the 'person' object into a JSON string, and returns the string.


// Do not alter below this line please... Doing so will BREAK automatic grading for your assignment!
// 1.
function createPerson() {
  const person = {
    name: 'Ben Feria',
    age: 27
  };
  return person;
}

// 2.
function logPersonProperties(person) {
  return person.name + ', ' + person.age;
}

// 3.
function modifyAge(person, newAge) {
  person.age = newAge;
  return person;
}

// 4.
function addJob(person, job) {
  person.job = job;
  return person;
}

// 5.
function deleteAge(person) {
  delete person.age;
  return person;
}

// 6.
function addGreet(person) {
  person.greet = function() {
    return 'Hi, ' + this.name;
  };
  return person.greet();
}

// 7.
function createNumbersArray() {
  const numbers = [11, 23, 1, 9, 95];
  return numbers;
}

// 8.
function logFirstAndThird(numbers) {
  return [numbers[0], numbers[2]];
}

// 9.
function modifySecond(numbers, newNumber) {
  numbers[1] = newNumber;
  return numbers;
}

// 10.
function logLength(numbers) {
  return numbers.length;
}

// 11.
function iterateWithFor(numbers) {
  const output = [];
  for (let i = 0; i < numbers.length; i++) {
    output.push(numbers[i]);
  }
  return output;
}

// 12.
function iterateWithWhile(numbers) {
  const output = [];
  let i = 0;
  while (i < numbers.length) {
    output.push(numbers[i]);
    i++;
  }
  return output;
}

// 13.
function iterateWithForOf(numbers) {
  const output = [];
  for (const number of numbers) {
    output.push(number);
  }
  return output;
}

// 14.
function createJSON(person) {
  return JSON.stringify(person);
}

// 15.
function parseJSON(json) {
  return JSON.parse(json);
}

// 16.
function stringifyPerson(person) {
  return JSON.stringify(person);
}

export {
  createPerson,
  logPersonProperties,
  modifyAge,
  addJob,
  deleteAge,
  addGreet,
  createNumbersArray,
  logFirstAndThird,
  modifySecond,
  logLength,
  iterateWithFor,
  iterateWithWhile,
  iterateWithForOf,
  createJSON,
  parseJSON,
  stringifyPerson
};

