// 1. Create an object named 'person' using object literal syntax. The object should have properties 'name' and 'age', with your name and age as the values. Log the object to the console.
const person = {
  name: 'John Doe',
  age: 25
};

console.log(person);

// 2. Access the 'name' and 'age' properties of the 'person' object using dot notation and log the values.
console.log(person.name); // Output: "John Doe"
console.log(person.age); // Output: 25

// 3. Modify the 'age' property of the 'person' object to a different number and log the updated object.
person.age = 30;
console.log(person);

// 4. Add a new property 'job' to the 'person' object with a value of your choice. Log the updated object.
person.job = 'Developer';
console.log(person);

// 5. Delete the 'age' property from the 'person' object and log the updated object.
delete person.age;
console.log(person);

// 6. Add a method 'greet' to the 'person' object that logs a greeting message using the 'name' property. Call the 'greet' method.
person.greet = function() {
  console.log('Hello, my name is ' + this.name);
};

person.greet(); // Output: "Hello, my name is John Doe"

// 7. Create an array named 'numbers' using array literal syntax with five numbers of your choice. Log the array to the console.
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// 8. Access the first and third elements of the 'numbers' array using their indices and log the values.
console.log(numbers[0]); // Output: 1
console.log(numbers[2]); // Output: 3

// 9. Modify the second element of the 'numbers' array to a different number and log the updated array.
numbers[1] = 10;
console.log(numbers);

// 10. Log the length of the 'numbers' array.
console.log(numbers.length); // Output: 5

// 11. Use a for loop to iterate over the 'numbers' array and log each element.
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 12. Use a while loop to iterate over the 'numbers' array and log each element.
let i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}

// 13. Use a for...of loop to iterate over the 'numbers' array and log each element.
for (const number of numbers) {
  console.log(number);
}

// 14. Create a JSON string named 'json' representing the 'person' object. Log the JSON string.
const json = JSON.stringify(person);
console.log(json);

// 15. Parse the 'json' string into a JavaScript object and log the object.
const parsedObject = JSON.parse(json);
console.log(parsedObject);

// 16. Stringify the 'person' object into a JSON string and log the string.
const jsonString = JSON.stringify(person);
console.log(jsonString);
