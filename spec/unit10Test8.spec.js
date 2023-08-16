import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {

  let person, numbers, json;

  beforeEach(function() {
    person = myModule.createPerson();
    numbers = myModule.createNumbersArray();
    json = myModule.createJSON(person);
  });

  // 8
  it('should return the first and third numbers of the array', function() {
    expect(myModule.logFirstAndThird(numbers)).toEqual([numbers[0], numbers[2]]);
  });

});
