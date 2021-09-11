function findMinAndRemoveSorted(arr) {
  return arr.shift();
}

function merge(subArr1, subArr2) {
  let sorted = [];
  while (!!subArr1.length && !!subArr2.length) {
    if (subArr1[0] < subArr2[0]) {
      sorted.push(findMinAndRemoveSorted(subArr1));
    } else {
      sorted.push(findMinAndRemoveSorted(subArr2));
    }
  }
  return sorted.concat(subArr1).concat(subArr2);
}

function mergeSort(array) {
  let midpoint = array.length / 2;
  let firstHalf = array.slice(0, midpoint);
  let secondHalf = array.slice(midpoint, array.length);

  if (array.length < 2) {
    return array;
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}
