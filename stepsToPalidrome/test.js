const stepsToPalidrome = require('./index');

describe('stepsToPalidrome helper methods', () => {
  test('reverseDigit() - reverses digit', () => {
    const reversed = stepsToPalidrome.reverseDigit(654321);
    expect(reversed).toEqual(123456);
  });

  test('checkPalidrome() - returns true if number is a palidrome', () => {
    const palidrome = stepsToPalidrome.checkPalidrome(12321);
    expect(palidrome).toEqual(true);
  });

  test('bigSexyRecursiveFunction() - returns 0', () => {
    const count = stepsToPalidrome.bigSexyRecursiveFunction(171, 0);
    expect(count).toEqual(0);
  });

  test('palindromeChainLength() - returns 0', () => {
    const count = stepsToPalidrome.palindromeChainLength(87);
    expect(count).toEqual(4);
  });

});