const S = require('./index');
const bubbleSort = S.bubbleSort;
//const selectionSort = S.selectionSort;
//const mergeSort = S.mergeSort;
//const merge = S.merge;

function getArray() {
  return [100, -40, 500, -124, 0, 21, 7];
}

function getSortedArray() {
  return [-124, -40, 0, 7, 21, 100, 500];
}

describe('Bubble sort', () => {
  test('sorts an array', () => {
    expect(bubbleSort(getArray())).toEqual(getSortedArray());
  });
});