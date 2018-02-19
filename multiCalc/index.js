//todo: extend this to include addition
//todo: make this curry-able

const extractDigitFromString = (num) => {
    if(typeof num === 'string'){
        return num.replace(/\D/g,'');
    }
    return num;
}

const mapToDigit = num => parseInt(num);

const filterOutZero = num => num !== 0

const filterOutInfinity = num => isFinite(num)

const reduceToProduct = (acc, num) => num * acc

const calc = (a) => (b) => (c) => {
    return [a,b,c]
    .map(extractDigitFromString)
    .map(mapToDigit)
    .filter(filterOutZero)
    .filter(filterOutInfinity)
    .reduce(reduceToProduct, 1)
}

module.exports = {
    extractDigitFromString,
    mapToDigit,
    filterOutZero,
    filterOutInfinity,
    reduceToProduct,
    calc
}


