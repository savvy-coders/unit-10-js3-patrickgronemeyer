import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {

  let person, numbers, json;

  beforeEach(function() {
    person = myModule.createPerson();
    numbers = myModule.createNumbersArray();
    json = myModule.createJSON(person);
  });
  // 12
  it('should iterate over the numbers array with a while loop', function() {
    expect(myModule.iterateWithWhile(numbers)).toEqual(numbers);
  });

});
