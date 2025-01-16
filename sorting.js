//1. section sort  O(n^2)

function findSmallest(arr) {
  let smallest = arr[0];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (smallest > arr[i]) {
      smallest = arr[i];
      index = i;
    }
  }
  return index;
}

function sectionSort(arr) {
  let newArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     let index = findSmallest(arr);
  //     newArr.push(arr[index]);
  //     arr.splice(index, 1);
  //   }
  while (arr.length > 0) {
    let index = findSmallest(arr);
    newArr.push(arr[index]);
    arr.splice(index, 1);
  }
  return newArr;
}
//correct version of for loop since the length change very iteration
// for (let i = 0; arr.length > 0; i++) {
//     let index = findSmallest(arr);
//     newArr.push(arr[index]);
//     arr.splice(index, 1);
//   }

let arr1 = [2, 32, 21, 2, 4, 5, 12];
console.log(sectionSort(arr1));
