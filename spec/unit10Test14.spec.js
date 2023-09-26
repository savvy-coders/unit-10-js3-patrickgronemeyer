import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {

  // 14
  it('should create a JSON string from the person object', function() {
    expect(myModule.createJSON(person)).toEqual(JSON.stringify(person));
  });

});
