const obj={
    name:'suhail'
}

function greet(message){
    console.log(`${message},${this.name}`)
}
greet.apply(obj,["hey"])