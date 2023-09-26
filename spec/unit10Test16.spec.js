import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {

  // 16
  it('should stringify the person object into a JSON string', function() {
    expect(myModule.stringifyPerson(person)).toEqual(JSON.stringify(person));
  });

});
