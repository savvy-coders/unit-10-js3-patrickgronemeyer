import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {

  let person, numbers, json;

  beforeEach(function() {
    person = myModule.createPerson();
    numbers = myModule.createNumbersArray();
    json = myModule.createJSON(person);
  });
  // 13
  it('should iterate over the numbers array with a for...of loop', function() {
    expect(myModule.iterateWithForOf(numbers)).toEqual(numbers);
  });
});
