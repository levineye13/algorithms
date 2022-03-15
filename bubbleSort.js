function swap(arr, left, right) {
  [arr[left], arr[right]] = [arr[right], arr[left]];
}

function bubbleSort(arr) {
  let swapped = false;

  for (let i = 0; i < arr.length - 1; i++) {
    swapped = false;

    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }

    if (swapped === false) {
      break;
    }
  }

  return arr;
}
