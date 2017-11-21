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

    let strSplit = str.split('');

    for(let x = 0; x < strSplit.length; x++){

    }

    return reversedString;
};

module.exports = reverseString; 