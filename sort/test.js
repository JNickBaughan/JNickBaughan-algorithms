const S = require('./index');

const bubbleSort = S.bubbleSort;
//helper functions for bubble sort
const swapWithNextAscending = S.swapWithNextAscending;
const swapWithNextDescending = S.swapWithNextDescending;
const greaterThanNext = S.greaterThanNext;
const lessThanNext = S.lessThanNext;

const selectionSort = S.selectionSort;
//helper functions for selection sort
const swapWithMinAscending = S.swapWithMinAscending;
const isGreaterThan = S.isGreaterThan;
const swapWithMaxDescending = S.swapWithMaxDescending;
const isLessThan = S.isLessThan;
//const mergeSort = S.mergeSort;
//const merge = S.merge;

function getArray() {
  return [100, -40, 500, -124, 0, 21, 7];
}

function getSortedAscendingArray() {
  return [-124, -40, 0, 7, 21, 100, 500];
}

function getSortedDescendingArray() {
  return [500, 100, 21, 7, 0, -40, -124];
}

describe('Bubble sort - ascending order', () => {
  test('sorts an array in ascending order', () => {
    const sortAscending = bubbleSort(greaterThanNext, swapWithNextAscending);
    expect(sortAscending(getArray())).toEqual(getSortedAscendingArray());
  });
});

describe('Bubble sort - descending order', () => {
  test('sorts an array in descending order', () => {
    const sortDescending = bubbleSort(lessThanNext, swapWithNextDescending);
    expect(sortDescending(getArray())).toEqual(getSortedDescendingArray());
  });
});

describe('Selection sort - ascending order', () => {
  test('sorts an array in ascending order', () => {
    const sortAscending = selectionSort(isGreaterThan, swapWithMinAscending);
    expect(sortAscending(getArray())).toEqual(getSortedAscendingArray());
  });
});

describe('Selection sort - descending order', () => {
  test('sorts an array in descending order', () => {
    const sortDescending = selectionSort(isLessThan, swapWithMaxDescending);
    expect(sortDescending(getArray())).toEqual(getSortedDescendingArray());
  });
});

// describe('Selection sort', () => {
//   test('sorts an array', () => {
//     expect(selectionSort(getArray())).toEqual(getSortedArray());
//   });
// });

// describe('Select sort', () => {
//   test('sorts an array', () => {
//     expect(selectSort(getArray())).toEqual(getSortedArray());
//   });
// });