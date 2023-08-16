import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {

  let person, numbers, json;

  beforeEach(function() {
    person = myModule.createPerson();
    numbers = myModule.createNumbersArray();
    json = myModule.createJSON(person);
  });

  // 10
  it('should return the length of the numbers array', function() {
    expect(myModule.logLength(numbers)).toEqual(5);
  });
});
