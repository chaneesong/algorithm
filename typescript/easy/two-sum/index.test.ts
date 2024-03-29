import { describe, expect, test } from '@jest/globals';
import { twoSum } from '.';

describe('two sum test describe', () => {
  test('test case 1', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual(expect.arrayContaining([0, 1]));
  });

  test('test case 2', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual(expect.arrayContaining([1, 2]));
  });

  test('test case 3', () => {
    expect(twoSum([3, 3], 6)).toEqual(expect.arrayContaining([0, 1]));
  });
});
