const Obj ={
    name:"suhail"
}

function greet(message){
    console.log(`${message},${this.name}`)
}
const BoundFunction= greet.bind(Obj)
BoundFunction("hey")