const str= 'Suhail'
let newStr=str.split('')
let k=[]
let n=newStr.length;
for(let i=0;i<n;i++){
    k.push(newStr.pop())
}
console.log(k.join(''))