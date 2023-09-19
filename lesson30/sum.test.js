const {
  checking,
  addition,
  subtrasction, 
  findMax,
  findMin,
  accumulator, 
  cancelableAccumulator,
} = require('./sum'); 

describe('checking', () => {
  it('should return true for numeric values', () => {
    expect(checking(0)).toBe(true);
    expect(checking(5)).toBe(true);
    expect(checking(-10)).toBe(true);
    expect(checking(3.14)).toBe(true);
  });

  it('should return false for other data types', () => {
    expect(checking('Hello')).toBe(false);
    expect(checking(undefined)).toBe(false);
    expect(checking(null)).toBe(false);
  });
});

describe('addition', () => {
  it('should return 5 when adding 3 and 2', () => {
    expect(addition(3,2)).toBe(5);
  });

  it('should return Error when adding "abc" and 4', () => {
    expect(addition("abc",4)).toBe("Error");
  });
});

describe('subtrasction', () => {
  it('should return 9 when adding 11 and 2', () => {
    expect(subtrasction(11,2)).toBe(9);
  });

  it('should return Error when adding null and 7', () => {
    expect(subtrasction(null,7)).toBe("Error");
  });
});

describe('findMax', () => {
  it('should return the maximum number from the array', () => {
    let array = [34, 5, 67, 38, 2, 26, 77, 19];
    expect(findMax(array)).toBe(77);
  });

  it('should properly handle an array with mixed data types', () => {
    let mixArray = [33, null, 'text', 99, undefined];
    expect(findMax(mixArray)).toBe(99);
  });
});

describe('findMin', () => {
  it('should return the minimum number from the array', () => {
    let array = [34, 5, 67, 38, 2, 26, 77, 19];
    expect(findMin(array)).toBe(2);
  });

  it('should properly handle an array with mixed data types', () => {
    let mixArray = [33, null, 'text', 99, undefined];
    expect(findMin(mixArray)).toBe(33);
  });
});

describe('Accumulator', () => {
  it('should increment increase the number by 1', () => {
    const num = 5;
    const instance = new accumulator(num);
    const result = instance.increment();
    expect(result).toBe(num + 1);
  });

  it('should decrement decrease the number by 1', () => {
    const num = 10;
    const instance = new accumulator(num);
    const result = instance.decrement();
    expect(result).toBe(num - 1);
  });
});

describe('CancelableAccumulator', () => {
  it('should increment increase the number by 1', () => {
    const num = 15;
    const instance = new cancelableAccumulator(num);
    const result = instance.increment();
    expect(result).toBe(num + 1);
  });

  it('should decrement decrease the number by 1', () => {
    const num = 20;
    const instance = new cancelableAccumulator(num);
    const result = instance.decrement();
    expect(result).toBe(num - 1);
  });

  it('should clear return a number', () => {
    const num = 25;
    const instance = new cancelableAccumulator(num);
    const result = instance.clear();
    expect(result).toBe(num);
  });
});
