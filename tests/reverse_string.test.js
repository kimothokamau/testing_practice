
const reverseStr = require('../examples/reverse_string.js');

describe('Reversed String Function', ()=>{
    test('input string is reversed', () => {
        expect(reverseStr('ethereum')).toBe('muerehte');
    });
    
    test('input string is not empty', () => {
        expect(reverseStr('')).toBe('String can\'t be blank');
    });
});