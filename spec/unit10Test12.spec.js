import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {

  // 12
  it('should iterate over the numbers array with a while loop', function() {
    let numbers = myModule.createNumbersArray();
    
    expect(myModule.iterateWithWhile(numbers)).toEqual(numbers);
  });

});
