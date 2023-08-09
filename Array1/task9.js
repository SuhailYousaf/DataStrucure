const originalArray = [[1, 2, 1], [4, 2, 4, 2, 1], [3, 2, 1, 3, 5]];
// Function to remove duplicates from an array
const removeDuplicates = (arr) => {
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
};

// Remove duplicates from each subarray and concatenate
const concatenatedArray = [];
for (let i = 0; i < originalArray.length; i++) {
    console.log(originalArray[i])
  const subarray = removeDuplicates(originalArray[i]);
  for (let j = 0; j < subarray.length; j++) {
    concatenatedArray.push(subarray[j]);
  }
}

console.log(concatenatedArray);
