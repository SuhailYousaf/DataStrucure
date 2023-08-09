//Find Union  of two unsorted arrays
function findUnion (arr1,arr2){
    let union =[]
    let mergedArr= arr1.concat(arr2)
    for(let i=0;i<mergedArr.length;i++){
        let isDuplicate=false;
        for(let j=0;j<union.length;j++){
            if(mergedArr[i]===union[j]){
                isDuplicate=true;
                break; 
            }
        }
        if(!isDuplicate){ 
            union.push(mergedArr[i])
        }
    }
    return union
       
}
let arr1=[1,2,5,6,8,7]
let arr2=[1,2,3,5,4,9,8]
let union =findUnion(arr1,arr2)
console.log(union.sort((a, b) => a - b))
