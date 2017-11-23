const reverseString = (str) => {
    if(typeof str !== 'string'){
        throw new Error(`parameter 'str' must be of type string`);
    } 
    return str.split('')
        .reverse()
        .join('');
};

module.exports = reverseString;