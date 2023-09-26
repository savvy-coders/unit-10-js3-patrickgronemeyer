import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {  // 10
  it('should return the length of the numbers array', function() {
    expect(myModule.logLength(numbers)).toEqual(5);
  });
});
