import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {

  let person, numbers, json;

  beforeEach(function() {
    person = myModule.createPerson();
    numbers = myModule.createNumbersArray();
    json = myModule.createJSON(person);
  });

  // 2
  it('should return the name and age properties of the person object', function() {
    expect(myModule.logPersonProperties(person)).toEqual({ name: person.name, age: person.age });
  });

});