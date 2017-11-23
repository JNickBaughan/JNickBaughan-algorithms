const reverseStringReduce = (str) => {
    
    if(typeof str !== 'string'){
        throw new Error(`parameter 'str' must be of type string`);
    } 

    return str.split('').reduce((reversed, character) => {
        return character + reversed;
    }, '');

};

module.exports = reverseStringReduce;