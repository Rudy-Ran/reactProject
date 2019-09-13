/* eslint-disable no-undef */
const sum = require('./sum.js');

test('test 1 plus 2 result', () => {
    expect(sum(1 , 2)).toBe(3);
});


test('2+2等于4', () => {
    expect(sum(2 , 2)).toBe(4);
});