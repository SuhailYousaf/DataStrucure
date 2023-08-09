const obj={
    name:"suhail"
}
function greet(message){
    console.log(`${message},${this.name}`)
}
greet.call(obj,"hello")