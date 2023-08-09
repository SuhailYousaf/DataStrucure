//o(logn) complexity
function BinarySearch(arr, target) {
    let startIdx = 0;
    let endIdx = arr.length - 1;

    while (startIdx <= endIdx) {
        let mid = Math.floor((startIdx + endIdx) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] > target) {
            endIdx = mid - 1;
        } else {
            startIdx = mid + 1;
        }
    }

    return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8,9];
let target = 5;
let result = BinarySearch(arr, target);
console.log(result); 
