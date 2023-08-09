//To find two numbers in an array that add up to target
// Complexity o(1)S , o(n2)T
function findTwoNumbersAddingToTarget(array,target){
    let result=[]

    for(let i=0;i<array.length-1;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]+array[j]===target){
                result.push(array[i], array[j]);
            }
        }
    }
    return result;
}
let array=[1,2,3,4,5,5]
let target=6
console.log(findTwoNumbersAddingToTarget(array,target))
