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

// 1. Create 'createPerson' function
function createPerson() {
    const person = {
      name: 'Your Name',
      age: YourAge // Replace with your actual age
    };
    return person;
  }
  
  // 2. Create 'logPersonProperties' function
  function logPersonProperties(person) {
    return `Name: ${person.name}, Age: ${person.age}`;
  }
  
  // 3. Create 'modifyAge' function
  function modifyAge(person, newAge) {
    person.age = newAge;
    return person;
  }
  
  // 4. Create 'addJob' function
  function addJob(person, job) {
    person.job = job;
    return person;
  }
  
  // 5. Create 'deleteAge' function
  function deleteAge(person) {
    delete person.age;
    return person;
  }
  
  // 6. Create 'addGreet' function
  function addGreet(person) {
    person.greet = function() {
      return `Hello, my name is ${this.name}`;
    };
    return person.greet();
  }
  
  // 7. Create 'createNumbersArray' function
  function createNumbersArray() {
    const numbers = [1, 2, 3, 4, 5];
    return numbers;
  }
  
  // 8. Create 'logFirstAndThird' function
  function logFirstAndThird(numbers) {
    return `First: ${numbers[0]}, Third: ${numbers[2]}`;
  }
  
  // 9. Create 'modifySecond' function
  function modifySecond(numbers, newNumber) {
    numbers[1] = newNumber;
    return numbers;
  }
  
  // 10. Create 'logLength' function
  function logLength(numbers) {
    return numbers.length;
  }
  
  // 11. Create 'iterateWithFor' function
  function iterateWithFor(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      console.log(numbers[i]);
    }
  }
  
  // 12. Create 'iterateWithWhile' function
  function iterateWithWhile(numbers) {
    let i = 0;
    while (i < numbers.length) {
      console.log(numbers[i]);
      i++;
    }
  }
  
  // 13. Create 'iterateWithForOf' function
  function iterateWithForOf(numbers) {
    for (const number of numbers) {
      console.log(number);
    }
  }
  
  // 14. Create 'createJSON' function
  function createJSON(person) {
    const json = JSON.stringify(person);
    return json;
  }
  
  // 15. Create 'parseJSON' function
  function parseJSON(json) {
    const obj = JSON.parse(json);
    return obj;
  }
  
  // 16. Create 'stringifyPerson' function
  function stringifyPerson(person) {
    const jsonString = JSON.stringify(person);
    return jsonString;
  }
  
  // Example usage:
  const person = createPerson();
  console.log(logPersonProperties(person));
  console.log(modifyAge(person, 30));
  console.log(addJob(person, 'Developer'));
  console.log(deleteAge(person));
  console.log(addGreet(person));
  const numbers = createNumbersArray();
  console.log(logFirstAndThird(numbers));
  console.log(modifySecond(numbers, 20));
  console.log(logLength(numbers));
  iterateWithFor(numbers);
  iterateWithWhile(numbers);
  iterateWithForOf(numbers);
  const personJSON = createJSON(person);
  console.log(personJSON);
  const personObj = parseJSON(personJSON);
  console.log(personObj);
  const personStringified = stringifyPerson(person);
  console.log(personStringified);


  // Replace 'Your Name' with your actual name and YourAge with your actual age to make the createPerson function work correctly. The code provided addresses each point of the challenge by applying the concepts of JavaScript objects, arrays, loops, and JSON.