const str = require('../examples/string_length.js');

describe('Testing string length', () => {
  const validString = str('success');
  const emptyString = str('');
  const longString = str('kimothokamau')

  test('input is valid, between 1-10 characters long', () => {
    expect(validString).toEqual(7);
  });

  test('input is invalid/empty', () => {
    expect(emptyString).toBe('Invalid string/empty');
  });

  test('input is invalid/toolong', () => {
    expect(longString).toBe('Invalid string/too long');
  });
});