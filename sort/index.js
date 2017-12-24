const swapWithNextAscending = (arr, index) => {
    const more = arr[index];
    const less = arr[index + 1];
    arr[index] = less;
    arr[index + 1] = more; 
    return arr;
}

const swapWithNextDescending = (arr, index) => {
    const more = arr[index];
    const less = arr[index + 1];
    arr[index] = less;
    arr[index + 1] = more; 
    return arr;
}

const greaterThanNext = (arr, index) => {
    return arr[index] > arr[index+1];
}

const lessThanNext = (arr, index) => {
    return arr[index] < arr[index+1];
}

const bubbleSort = (needToSwap, swap) => {
    return (arr) => {
        for (let i = 0; i < arr.length; i++) { 
            for (let j = 0; j < (arr.length-i - 1); j++) { 
                if(needToSwap(arr, j)){
                    swap(arr, j);
                }
            }
        }
        return arr;
    }
}

const swapWithMinAscending = (arr, indexOfMin, index) => {
    const more = arr[indexOfMin];
    arr[indexOfMin] = arr[index];
    arr[index] = more;
    return arr;
}

const swapWithMaxDescending = (arr, indexOfMax, index) => {
    const less = arr[indexOfMax];
    arr[indexOfMax] = arr[index];
    arr[index] = less;
    return arr;
}

const isGreaterThan = (arr, indexOfMin, index) => {
    return arr[indexOfMin] > arr[index];
}

const isLessThan = (arr, indexOfMax, index) => {
    return arr[indexOfMax] < arr[index];
}

const selectionSort = (needToSwap, swap) => {
    return (arr) => {
        for (let i = 0; i < arr.length; i++) { 
            let indexOfMin = i;
            for (let j = i+1; j < arr.length; j++) { 
                if(needToSwap(arr, indexOfMin, j)){
                    indexOfMin = j;
                }
            }
            if(indexOfMin !== i){
                swap(arr,indexOfMin, i);
            }
        }
        return arr;
    }
}

const mergeSort = (arr) => {
    if(arr.length === 1) return arr;
    const halfIndex = Math.ceil(arr.length/2);

    const left = arr.slice(0, halfIndex);
    const right = arr.slice(halfIndex);

    return merge(mergeSort(left),mergeSort(right));
    
}

const merge = (left, right) => {
    const sorted = [];
    while(left.length && right.length){
        left[0] < right[0]
            ? sorted.push(left.shift())
            : sorted.push(right.shift())
    }
    return [ ...sorted, ...left, ...right ]
}

module.exports.bubbleSort = bubbleSort;
module.exports.swapWithNextAscending = swapWithNextAscending;
module.exports.swapWithNextDescending = swapWithNextDescending;
module.exports.greaterThanNext = greaterThanNext;
module.exports.lessThanNext = lessThanNext;

module.exports.selectionSort = selectionSort;
module.exports.swapWithMinAscending = swapWithMinAscending;
module.exports.swapWithMaxDescending = swapWithMaxDescending;
module.exports.isLessThan = isLessThan;
module.exports.isGreaterThan = isGreaterThan;

module.exports.mergeSort = mergeSort;
module.exports.merge = merge;




