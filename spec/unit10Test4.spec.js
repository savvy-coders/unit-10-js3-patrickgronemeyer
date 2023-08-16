import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {

  let person, numbers, json;

  beforeEach(function() {
    person = myModule.createPerson();
    numbers = myModule.createNumbersArray();
    json = myModule.createJSON(person);
  });

  // 4
  it('should add a job to the person object', function() {
    person = myModule.addJob(person, 'Engineer');
    expect(person.job).toEqual('Engineer');
  });

});
