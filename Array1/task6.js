//find the sum of array elements
function sumOfArray(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum += array[i]
    }
    return sum;
}
const array =[1,2,3]
console.log(sumOfArray(array))