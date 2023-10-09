import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {  // 7
  it('should create an array of numbers', function() {
    let numbers = myModule.createNumbersArray();
    
    expect(numbers.length).toEqual(5);
  });

});
