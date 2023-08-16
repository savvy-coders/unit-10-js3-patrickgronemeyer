import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {

  let person, numbers, json;

  beforeEach(function() {
    person = myModule.createPerson();
    numbers = myModule.createNumbersArray();
    json = myModule.createJSON(person);
  });

  // 5
  it('should delete the age from the person object', function() {
    person = myModule.deleteAge(person);
    expect(person.age).toBeUndefined();
  });
});
