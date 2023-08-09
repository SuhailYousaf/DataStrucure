//o(n2)t, o(1)s complexity
function InsertionSort(arr){
    for (let i=1;i<arr.length-1;i++){
        let current= arr[i] 
        let j= i-1
        while(j>=0 && arr[j]>=current){
            arr[j+1]=arr[j]
            j--;
        }
        arr[j+1]=current;
    }
    return arr;
}

let arr=[4,5,6,2,3,1,7]
console.log(InsertionSort(arr))


// function insertion (arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i;j>0;j--){
//             if(arr[j]<arr[j-1]){
//                  let temp=arr[j]
//                  arr[j]=arr[j-1]
//                  arr[j-1]=temp
//             }else{
//                 break;
//             }
//         }
//     }
//     return arr
// }
// const arr=[5,4,3,2,1]
// console.log(insertion(arr))

