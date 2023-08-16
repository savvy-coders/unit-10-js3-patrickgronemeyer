import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {

  let person, numbers, json;

  beforeEach(function() {
    person = myModule.createPerson();
    numbers = myModule.createNumbersArray();
    json = myModule.createJSON(person);
  });
  // 11
  it('should iterate over the numbers array with a for loop', function() {
    expect(myModule.iterateWithFor(numbers)).toEqual(numbers);
  });
});
