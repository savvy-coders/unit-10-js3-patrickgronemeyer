import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {
  it('should return the name and age properties of the person object', function() {
    let person = myModule.createPerson();

    // Use jasmine.objectContaining() to check for the expected properties and values.
    expect(myModule.logPersonProperties(person)).toContain(person.name, person.age );
  });
});
