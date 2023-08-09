//o(n)t , o(1)s complexity
function linearSearch (target,arr){
    for(i of arr){
        if(arr[i]==target){
            return i
        }
        
    }
    return -1
}

arr=[1,2,3,4,5]
target =32
result = linearSearch(target,arr)
if(result==-1){
    console.log("not found")
}else{
    console.log("target is found  index number " +result)
}