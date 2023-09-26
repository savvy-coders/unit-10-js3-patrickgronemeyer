import * as myModule from '../index.js';

describe('JavaScript Coding Challenge', function() {

  // 12
  it('should iterate over the numbers array with a while loop', function() {
    expect(myModule.iterateWithWhile(numbers)).toEqual(numbers);
  });

});
