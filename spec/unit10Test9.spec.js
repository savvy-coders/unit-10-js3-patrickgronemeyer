import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {  // 9
  it('should modify the second number of the array', function() {
    let numbers = myModule.createNumbersArray();
    
    numbers = myModule.modifySecond(numbers, 10);
    expect(numbers[1]).toEqual(10);
  });

});
