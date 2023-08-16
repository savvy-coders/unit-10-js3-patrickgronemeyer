import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {

  let person, numbers, json;

  beforeEach(function() {
    person = myModule.createPerson();
    numbers = myModule.createNumbersArray();
    json = myModule.createJSON(person);
  });
  // 14
  it('should create a JSON string from the person object', function() {
    expect(myModule.createJSON(person)).toEqual(JSON.stringify(person));
  });

});
