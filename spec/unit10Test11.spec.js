import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {

  // 11
  it('should iterate over the numbers array with a for loop', function() {
    expect(myModule.iterateWithFor(numbers)).toEqual(numbers);
  });
});
