const reverseString = (str) => {
    if(typeof str !== 'string'){
        throw new Error(`parameter 'str' must be of type string`);
    } 
    return str.split('')
        .reverse()
        .join('');
};

const reverseStringManually = (str) => {
    
        if(typeof str !== 'string'){
            throw new Error(`parameter 'str' must be of type string`);
        } 
    
        let reversedString = '';
    
        str.split('').forEach(character => reversedString = character + reversedString);
    
    
        return reversedString;
    };

const reverseStringReduce = (str) => {
    
        if(typeof str !== 'string'){
            throw new Error(`parameter 'str' must be of type string`);
        } 
    
        return str.split('').reduce((reversed, character) => {
            return character + reversed;
        }, '');
    
    };

module.exports = reverseString;
module.exports = reverseStringManually; 
module.exports = reverseStringReduce;

 