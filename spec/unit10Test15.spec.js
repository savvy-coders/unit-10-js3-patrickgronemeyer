import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {  // 15
  it('should parse the JSON string into a JavaScript object', function() {
    let person = myModule.createPerson();
    let json = myModule.createJSON(person);

    
    expect(myModule.parseJSON(json)).toEqual(person);
  });

});
