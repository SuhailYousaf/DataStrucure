//o(n2)t, o(1)s complexity
function  BubbleSort(arr){
    let n= arr.length-1;
    for ( let i=0; i<n;i++){
        for (let j =0;j<n;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}

const arr=[2,3,5,8,7,9]

console.log(BubbleSort(arr))

