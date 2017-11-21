const reverseString = require('./index');
const reverseStringManually = require('./index');

test('reverseString passed parameter must be a string', () => {
    expect(() => {
        reverseString(800);
      }).toThrow();
  });

  test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
  });
  
  test('reverseString reverses a string', () => {
    expect(reverseString('abcd')).toEqual('dcba');
  });
  
  test('reverseString reverses a string', () => {
    expect(reverseString('  abcd')).toEqual('dcba  ');
  });


  test('reverseStringManually passed parameter must be a string', () => {
    expect(() => {
        reverseStringManually(800);
      }).toThrow();
  });

  test('reverseStringManually function exists', () => {
    expect(reverseStringManually).toBeDefined();
  });
  
  test('reverseStringManually reverses a string', () => {
    expect(reverseStringManually('abcd')).toEqual('dcba');
  });
  
  test('reverseStringManually reverses a string', () => {
    expect(reverseStringManually('  abcd')).toEqual('dcba  ');
  });