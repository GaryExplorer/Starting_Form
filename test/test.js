const sum = require('./sum');
import {emailValidator} from '../src/Validator/handleValidator'


test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 3; a++) {
    for (let b = 1; b < 3; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test('Validator null(input) => CORRECT', () => {
  expect(emailValidator('')).toBe('CORRECT');
})

test('Validator correct(input) => CORRECT', () => {
  expect(emailValidator('gary@gmail.com')).toBe('CORRECT');
})