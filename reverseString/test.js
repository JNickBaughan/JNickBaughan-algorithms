const reverseString = require('./index');
const reverseStringManually = require('./index');
const reverseStringReduce = require('./index');

//reverse string 
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

//reverse string manually
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



//reverse string using the reduce function
test('reverseStringReduce passed parameter must be a string', () => {
expect(() => {
  reverseStringReduce(800);
  }).toThrow();
});

test('reverseStringReduce function exists', () => {
  expect(reverseStringReduce).toBeDefined();
});

test('reverseStringReduce reverses a string', () => {
  expect(reverseStringReduce('abcd')).toEqual('dcba');
});

test('reverseStringReduce reverses a string', () => {
  expect(reverseStringReduce('  abcd')).toEqual('dcba  ');
});
