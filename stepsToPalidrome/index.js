var checkPalidrome = function(digit){
    return digit === reverseDigit(digit);
  }
  
  var reverseDigit = function(digit) {
    return parseInt(digit.toString().split('').reverse().join(''))
  }
  
  var bigSexyRecursiveFunction = function(digit, count){
    if(checkPalidrome(digit)){
      return count;
    }else{
      count++
      let reversed = reverseDigit(digit);
      let newDigit = digit + reversed;
      return bigSexyRecursiveFunction(newDigit, count);
    }
  }
  
  var palindromeChainLength = function(digit) {
    let count = 0;
    return bigSexyRecursiveFunction(digit, count);
  };

  module.exports = {
    reverseDigit,
    checkPalidrome,
    bigSexyRecursiveFunction,
    palindromeChainLength
  }