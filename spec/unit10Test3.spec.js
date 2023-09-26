import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {  // 3
  it('should modify the age of the person object', function() {
    person = myModule.modifyAge(person, 30);
    expect(person.age).toEqual(30);
  });

});
