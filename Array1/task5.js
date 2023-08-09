//print negative element in an array
function negative(array){
    let result=[]
    for(let i=0;i<array.length;i++){
          if(array[i]<0){
             result.push(array[i])
          }
    }
    return result;
}
array=[-1,2,-3,4,-5]
console.log(negative(array))