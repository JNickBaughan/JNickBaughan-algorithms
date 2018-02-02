const chunk = (arr, num) => {
    let chunkedArray = [];

    let index = 0;
    let count = 01;

    arr.forEach(current=> {
        //if outerIndex is 0 it's time to push a new array to the array
        if(count === 1){
            chunkedArray.push([]);
        }
        chunkedArray[index].push(current);

        //we've gotten to the end of this sub array
        if(count === num){
            index++;
            count = 1;
        }
        //else we need to bump up the count
        else{
            count++;
        }

    });

    return chunkedArray;
}

module.exports = chunk;