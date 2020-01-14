const typeformatter = require('../lib/typeformatter');

describe('typeformatter', () => {
  test('should return INT', () => {
    expect(typeformatter(174)).toBe('INT');
    expect(typeformatter('174')).toBe('INT');
  });
  test('should return DOUBLE', () => {
    expect(typeformatter(174.5)).toBe('DOUBLE');
    expect(typeformatter('174.5')).toBe('DOUBLE');
  });
});
