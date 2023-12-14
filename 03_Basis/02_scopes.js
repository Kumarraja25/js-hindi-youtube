//var c=300
let a=10
if(true){
    let a=100; // block scope
    const b=20; // block scope
    var c=5; // global scope
}

//console.log(a) // error undefined because of block scope
//console.log(b) // error undefined because of block scope

console.log(c) // 5 
console.log(a) //10    

function one(){
    const username="Raja"

    function two(){
        const website="www.gmail.com"
        console.log(username);
    }
    two()
    // console.log(website);//undefined
}
//one()

if(true){
    const username="Raja"
    if(username==="Raja"){
        const website="youtube"
        console.log(username)
    }
    // console.log(website)
}
// console.log(username)

//****************   Declaration of function  **********

console.log(addone(5));

function addone(num){
    return num+1
}

//addtwo(6) //Cannot access 'addtwo' before initialization

const addtwo=function(num){
    return num+2
}