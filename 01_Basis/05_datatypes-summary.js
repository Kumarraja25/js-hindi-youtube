// Primitive
// 7 types : String, number, boolean, null, undefined, bigInt, Symbol
//call by value

const Num = false

let bigNumber = 25874569856884n
let name = "Raja"
let opinion;
let choice = null;

let Symb1= Symbol("123")
let Symb2= Symbol("123")

console.log(Symb1 == Symb2)
// false Symbol unifies value and treat it diffrently 

//Non primitive (Reference)
// Array, Objects, Function1

let students=["Radhakant","Sanket","Rajat","Jaga"]

let myObj={
    Name:"Raja",
    RegNo:2201109070,
    Branch:"CSE",
}

let program = function(){
    console.log("this is a function")
}

console.log(typeof program)
console.log(typeof choice)
console.log(typeof opinion)

