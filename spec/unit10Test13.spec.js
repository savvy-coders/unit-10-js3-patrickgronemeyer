import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {

  // 13
  it('should iterate over the numbers array with a for...of loop', function() {
    expect(myModule.iterateWithForOf(numbers)).toEqual(numbers);
  });
});
