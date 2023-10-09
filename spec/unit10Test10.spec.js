import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {  // 10
  it('should return the length of the numbers array', function() {
    let numbers = myModule.createNumbersArray();
    
    expect(myModule.logLength(numbers)).toEqual(5);
  });
});
