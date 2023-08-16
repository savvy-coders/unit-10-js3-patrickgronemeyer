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

});
