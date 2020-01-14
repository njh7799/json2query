const typechecker = require('../lib/typechecker');

describe('typechecker', () => {
  test('should return string', () => {
    expect(typechecker('jack')).toBe('string');
    expect(typechecker('010-101')).toBe('string');
  });
  test('should return integer', () => {
    expect(typechecker(174)).toBe('integer');
    expect(typechecker('174')).toBe('integer');
  });
  test('should return double', () => {
    expect(typechecker(174.5)).toBe('double');
    expect(typechecker('174.5')).toBe('double');
  });
});
