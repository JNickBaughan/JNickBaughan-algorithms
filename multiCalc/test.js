const multi = require('./index');

test('extractDigitFromString returns the digit part of the string', () => {
  const expected = '6';
  const actual = multi.extractDigitFromString('f6');
  expect(expected).toEqual(actual);
});

test('mapToDigit takes a string and converts to digit', () => {
  const expected = 6;
  const actual = multi.mapToDigit('6');
  expect(expected).toEqual(actual);
});

test('filterOutZero returns true if num !== 0', () => {
  const expected = true;
  const actual = multi.filterOutZero(6);
  expect(expected).toEqual(actual);
});

test('filterOutZero returns false if num === 0', () => {
  const expected = false;
  const actual = multi.filterOutZero(0);
  expect(expected).toEqual(actual);
});

test('filterOutInfinity returns false if num === infinity', () => {
  const expected = false;
  const actual = multi.filterOutInfinity(Infinity);
  expect(expected).toEqual(actual);
});

test('filterOutInfinity returns false if num === -infinity', () => {
  const expected = false;
  const actual = multi.filterOutInfinity(-Infinity);
  expect(expected).toEqual(actual);
});

test('filterOutInfinity returns false if num !== infinity && num !== -Inifnity', () => {
  const expected = true;
  const actual = multi.filterOutInfinity(100);
  expect(expected).toEqual(actual);
});

test('calc should return 120', () => {
  const expected = 120;
  const actual = multi.calc(5)(12)(2);
  expect(expected).toEqual(actual);
});

test('calc should return 21 when passed a zero', () => {
  const expected = 21;
  const actual = multi.calc(7)(0)(3);
  expect(expected).toEqual(actual);
});

test('calc should return 21 when passed strings', () => {
  const expected = 21;
  const actual = multi.calc('7')('0')('3');
  expect(expected).toEqual(actual);
});

test('calc should return 12 when passed strings', () => {
  const expected = 12;
  const actual = multi.calc("f4")("a1")("p3");
  expect(expected).toEqual(actual);
});

test('calc should return 18 when passes -Inifnity and p3', () => {
  const expected = 18;
  const actual = multi.calc(-Infinity)('6')('3');
  expect(expected).toEqual(actual);
});


