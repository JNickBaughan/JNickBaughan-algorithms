const swap = (arr, index) => {
    const more = arr[index];
    const less = arr[index + 1];
    arr[index] = less;
    arr[index + 1] = more; 
    return arr;
}

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) { 
        for (let j = 0; j < (arr.length-i - 1); j++) { 
            if(arr[j] > arr[j+1]){
                swap(arr, j);
            }
        }
    }
    return arr;
}

module.exports.bubbleSort = bubbleSort;