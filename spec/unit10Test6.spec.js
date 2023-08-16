import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {

  let person, numbers, json;

  beforeEach(function() {
    person = myModule.createPerson();
    numbers = myModule.createNumbersArray();
    json = myModule.createJSON(person);
  });

  // 6
  it('should add a greet method to the person object', function() {
    let greet = myModule.addGreet(person);
    expect(greet).toEqual('Hello, my name is ' + person.name);
  });

});
