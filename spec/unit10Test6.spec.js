import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {  // 6
  it('should add a greet method to the person object', function() {
    let greet = myModule.addGreet(person);
    expect(greet).toEqual('Hello, my name is ' + person.name);
  });

});
