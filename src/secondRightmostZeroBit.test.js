const solution = require('./secondRightmostZeroBit.js');

test('test 1', () => {
    expect(solution(37)).toBe(8);
});

test('test 2', () => {
    expect(solution(1073741824)).toBe(2);
});

test('test 3', () => {
    expect(solution(83748)).toBe(2);
});

test('test 4', () => {
    expect(solution(4)).toBe(2);
});

test('test 5', () => {
    expect(solution(728782938)).toBe(4);
});
