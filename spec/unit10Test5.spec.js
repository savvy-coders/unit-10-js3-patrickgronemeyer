import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {  // 5
  it('should delete the age from the person object', function() {
    let person = myModule.createPerson();
    
    person = myModule.deleteAge(person);
    expect(person.age).toBeUndefined();
  });
});
