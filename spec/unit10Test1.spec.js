import * as myModule from '../index.js';


describe('JavaScript Coding Challenge', function() {  // 1
  it('should create a person object with name as string and age as number', function() {
    let person = myModule.createPerson();
    expect(typeof person.name).toEqual('string');
    expect(typeof person.age).toEqual('number');
  });

});
