function swap(arr, left, right) {
  [arr[left], arr[right]] = [arr[right], arr[left]];
}
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    swap(arr, i, minIndex);
  }

  return arr;
}
