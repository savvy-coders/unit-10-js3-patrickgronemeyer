import * as solution from '../index.js';

describe('JavaScript Coding Challenge', () => {
  let person;
  let numbers;
  let originalConsoleLog;

  beforeEach(() => {
    originalConsoleLog = console.log;
    console.log = jasmine.createSpy('log');
    person = solution.createPerson();
    numbers = solution.createNumbersArray();
  });

  afterEach(() => {
    console.log = originalConsoleLog;
  });

  it('should create a person object with name and age', () => {
    expect(person.name).toEqual('John Doe');
    expect(person.age).toEqual(25);
  });

  it('should log person properties', () => {
    solution.logPersonProperties(person);
    expect(console.log).toHaveBeenCalledWith('John Doe');
    expect(console.log).toHaveBeenCalledWith(25);
  });

  it('should modify person age', () => {
    solution.modifyAge(person, 30);
    expect(person.age).toEqual(30);
    expect(console.log).toHaveBeenCalledWith(person);
  });

  it('should add job to person', () => {
    solution.addJob(person, 'Engineer');
    expect(person.job).toEqual('Engineer');
    expect(console.log).toHaveBeenCalledWith(person);
  });

  it('should delete age from person', () => {
    solution.deleteAge(person);
    expect(person.age).toBeUndefined();
    expect(console.log).toHaveBeenCalledWith(person);
  });

  it('should add greet method to person', () => {
    solution.addGreet(person);
    expect(person.greet).toBeDefined();
    expect(console.log).toHaveBeenCalledWith('Hello, my name is John Doe');
  });

  it('should create an array of numbers', () => {
    expect(numbers).toEqual([1, 2, 3, 4, 5]);
  });

  it('should log first and third numbers', () => {
    solution.logFirstAndThird(numbers);
    expect(console.log).toHaveBeenCalledWith(1);
    expect(console.log).toHaveBeenCalledWith(3);
  });

  it('should modify second number', () => {
    solution.modifySecond(numbers, 10);
    expect(numbers[1]).toEqual(10);
    expect(console.log).toHaveBeenCalledWith(numbers);
  });

  it('should log length of numbers array', () => {
    solution.logLength(numbers);
    expect(console.log).toHaveBeenCalledWith(5);
  });

  it('should iterate with for loop', () => {
    solution.iterateWithFor(numbers);
    numbers.forEach(num => {
      expect(console.log).toHaveBeenCalledWith(num);
    });
  });

  it('should iterate with while loop', () => {
    solution.iterateWithWhile(numbers);
    numbers.forEach(num => {
      expect(console.log).toHaveBeenCalledWith(num);
    });
  });

  it('should iterate with for of loop', () => {
    solution.iterateWithForOf(numbers);
    numbers.forEach(num => {
      expect(console.log).toHaveBeenCalledWith(num);
    });
  });

  it('should create JSON from person', () => {
    solution.createJSON(person);
    expect(console.log).toHaveBeenCalledWith(JSON.stringify(person));
  });

  it('should parse JSON to object', () => {
    const json = JSON.stringify(person);
    solution.parseJSON(json);
    expect(console.log).toHaveBeenCalledWith(person);
  });

  it('should stringify person to JSON', () => {
    solution.stringifyPerson(person);
    expect(console.log).toHaveBeenCalledWith(JSON.stringify(person));
  });
});
