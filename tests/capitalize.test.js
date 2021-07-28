
const capitalize = require('../examples/capitalize');

describe('String capitalize function', () => {
    test('First character of sting is set to uppercase', ()=>{
      expect(capitalize('vitalik')).toBe('Vitalik');
    });

    test('String input is not empty', ()=>{
      expect(capitalize('')).toBe('String can\'t be empty');
    });

    test('input is a string', ()=>{
      expect(capitalize(1)).toBe('Input must be a string');
    });
});