import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {

  let person, numbers, json;

  beforeEach(function() {
    person = myModule.createPerson();
    numbers = myModule.createNumbersArray();
    json = myModule.createJSON(person);
  });

  // 9
  it('should modify the second number of the array', function() {
    numbers = myModule.modifySecond(numbers, 10);
    expect(numbers[1]).toEqual(10);
  });

});
