import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {  // 6
  it('should add a greet method to the person object', function() {
    let person = myModule.createPerson();
    let regex = /Hello||hello||Hi||hi||Hey||hey/;

    let greet = myModule.addGreet(person);

    expect(greet).toMatch(regex);
    expect(greet).toContain(person.name);
  });

});
