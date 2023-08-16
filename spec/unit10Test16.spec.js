import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {

  let person, numbers, json;

  beforeEach(function() {
    person = myModule.createPerson();
    numbers = myModule.createNumbersArray();
    json = myModule.createJSON(person);
  });
  // 16
  it('should stringify the person object into a JSON string', function() {
    expect(myModule.stringifyPerson(person)).toEqual(JSON.stringify(person));
  });

});
