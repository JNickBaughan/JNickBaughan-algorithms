const reverseStringManually = (str) => {
    
    if(typeof str !== 'string'){
        throw new Error(`parameter 'str' must be of type string`);
    } 

    let reversedString = '';

    str.split('').forEach(character => reversedString = character + reversedString);

    return reversedString;
};

module.exports = reverseStringManually; 