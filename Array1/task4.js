//2nd smallest element in an array
function seconSmall(array){
    let smallest=Infinity;
    let seconSmall=Infinity;
       for(let i=0;i<array.length-1;i++){
           if(array[i]<smallest){
                smallest=array[i]
           }else if(array[i]<seconSmall && array[i] != smallest){
                seconSmall=array[i]
           }
       }
       return seconSmall;
}

const array=[1,2,3,5,6,4]
console.log(seconSmall(array))

//if second largest == -Infinity