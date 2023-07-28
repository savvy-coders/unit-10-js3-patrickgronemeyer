import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {

  let person, numbers, json;

  beforeEach(function() {
    person = myModule.createPerson();
    numbers = myModule.createNumbersArray();
    json = myModule.createJSON(person);
  });

  // 1
  it('should create a person object with name as string and age as number', function() {
    expect(typeof person.name).toEqual('string');
    expect(typeof person.age).toEqual('number');
  });

  // 2
  it('should return the name and age properties of the person object', function() {
    expect(myModule.logPersonProperties(person)).toEqual({ name: person.name, age: person.age });
  });

  // 3
  it('should modify the age of the person object', function() {
    person = myModule.modifyAge(person, 30);
    expect(person.age).toEqual(30);
  });

  // 4
  it('should add a job to the person object', function() {
    person = myModule.addJob(person, 'Engineer');
    expect(person.job).toEqual('Engineer');
  });

  // 5
  it('should delete the age from the person object', function() {
    person = myModule.deleteAge(person);
    expect(person.age).toBeUndefined();
  });

  // 6
  it('should add a greet method to the person object', function() {
    let greet = myModule.addGreet(person);
    expect(greet).toEqual('Hello, my name is ' + person.name);
  });

  // 7
  it('should create an array of numbers', function() {
    expect(numbers.length).toEqual(5);
  });

  // 8
  it('should return the first and third numbers of the array', function() {
    expect(myModule.logFirstAndThird(numbers)).toEqual([numbers[0], numbers[2]]);
  });

  // 9
  it('should modify the second number of the array', function() {
    numbers = myModule.modifySecond(numbers, 10);
    expect(numbers[1]).toEqual(10);
  });

  // 10
  it('should return the length of the numbers array', function() {
    expect(myModule.logLength(numbers)).toEqual(5);
  });

  // 11
  it('should iterate over the numbers array with a for loop', function() {
    expect(myModule.iterateWithFor(numbers)).toEqual(numbers);
  });

  // 12
  it('should iterate over the numbers array with a while loop', function() {
    expect(myModule.iterateWithWhile(numbers)).toEqual(numbers);
  });

  // 13
  it('should iterate over the numbers array with a for...of loop', function() {
    expect(myModule.iterateWithForOf(numbers)).toEqual(numbers);
  });

  // 14
  it('should create a JSON string from the person object', function() {
    expect(myModule.createJSON(person)).toEqual(JSON.stringify(person));
  });

  // 15
  it('should parse the JSON string into a JavaScript object', function() {
    expect(myModule.parseJSON(json)).toEqual(person);
  });

  // 16
  it('should stringify the person object into a JSON string', function() {
    expect(myModule.stringifyPerson(person)).toEqual(JSON.stringify(person));
  });

});
