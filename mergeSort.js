function mergeSort(arr, left = 0, right = arr.length - 1) {
  if (arr.length === 0) {
    return [];
  }

  if (left >= right) {
    return [arr[right]];
  }

  const mid = Math.floor((right + left) / 2);

  const leftArr = mergeSort(arr, left, mid);
  const rightArr = mergeSort(arr, mid + 1, right);

  let leftIndex = 0;
  let rightIndex = 0;
  let index = 0;
  const res = new Array(right - left + 1);

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] <= rightArr[rightIndex]) {
      res[index] = leftArr[leftIndex++];
    } else {
      res[index] = rightArr[rightIndex++];
    }

    index++;
  }

  while (leftIndex < leftArr.length) {
    res[index] = leftArr[leftIndex++];
    index++;
  }

  while (rightIndex < rightArr.length) {
    res[index] = rightArr[rightIndex++];
    index++;
  }

  return res;
}
