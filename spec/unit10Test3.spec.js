import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {

  let person, numbers, json;

  beforeEach(function() {
    person = myModule.createPerson();
    numbers = myModule.createNumbersArray();
    json = myModule.createJSON(person);
  });

  // 3
  it('should modify the age of the person object', function() {
    person = myModule.modifyAge(person, 30);
    expect(person.age).toEqual(30);
  });

});
