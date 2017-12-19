const swap = (arr, index) => {
    const more = arr[index];
    const less = arr[index + 1];
    arr[index] = less;
    arr[index + 1] = more; 
    return arr;
}

const swapForSelectionSort = (arr, indexOfMin, index) => {
    const less = arr[indexOfMin];
    arr[indexOfMin] = arr[index];
    arr[index] = less;
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

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) { 
        let indexOfMin = i;
        for (let j = i+1; j < arr.length; j++) { 
            if(arr[indexOfMin] > arr[j]){
                indexOfMin = j;
            }
        }
        if(indexOfMin !== i){
            swapForSelectionSort(arr,indexOfMin, i);
        }
    }
    return arr;
}

const selectSort = (arr) => {
    for (let a = 0; a < arr.length; a++) { 
        for (let b = a+1; b < arr.length; b++) { 
            if(arr[a] > arr[b]){
                swapForSelectionSort(arr,a, b);
            }
        }
    }
    return arr;
}

module.exports.bubbleSort = bubbleSort;
module.exports.selectionSort = selectionSort;
module.exports.selectSort = selectSort;