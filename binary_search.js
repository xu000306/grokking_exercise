// the binary search
function binary_search(array, targetNum) {
  let min = 0;
  let max = array.length - 1;
  let middleIndex = Math.floor((min + max) / 2);
  let times = 0;
  while (min <= max) {
    times++;
    if (targetNum === array[middleIndex]) {
      return { index: middleIndex, times: times };
    }
    if (targetNum > array[middleIndex]) {
      min = middleIndex + 1;
    }
    if (targetNum < array[middleIndex]) {
      max = middleIndex - 1;
    }
    middleIndex = Math.floor((min + max) / 2);
  }
  return { times: times, result: -1 };
}

// console.log(binary_search([1,2,4,6,7,8,9],9));
// console.log(binary_search([1,2,4,6,7,8,9],5));
function create_ascending_array(length) {
  let arr = [];
  let val = 0;
  for (let i = 0; i < length; i++) {
    val = val + 1 + Math.floor(10 * Math.random());
    arr.push(val);
    val = arr[i];
  }
  return arr;
}
let arr1 = create_ascending_array(10000000);
// console.log(arr1);
console.log(binary_search(arr1, 8987099));
