const { default: TestRunner } = require('jest-runner');

const addFile = require('./addFive');

test('addFive', () => {
  expect(addFile(5)).toBe(10);
});

