import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {

  let person, numbers, json;

  beforeEach(function() {
    person = myModule.createPerson();
    numbers = myModule.createNumbersArray();
    json = myModule.createJSON(person);
  });

  // 15
  it('should parse the JSON string into a JavaScript object', function() {
    expect(myModule.parseJSON(json)).toEqual(person);
  });

});
