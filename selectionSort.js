function swap(arr, left, right) {
  [arr[left], arr[right]] = [arr[right], arr[left]];
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex] || minIndex === undefined) {
        minIndex = j;
      }
    }

    if (i !== minIndex) {
      swap(arr, i, minIndex);
    }
  }

  return arr;
}
