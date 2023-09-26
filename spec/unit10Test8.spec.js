import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {  // 8
  it('should return the first and third numbers of the array', function() {
    expect(myModule.logFirstAndThird(numbers)).toEqual([numbers[0], numbers[2]]);
  });

});
