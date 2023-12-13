

function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("J");
    console.log("A");
}

//sayMyName() //reference + execution ()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }
function addTwoNumbers(number1,number2){
    return number1+number2;
}

let result=addTwoNumbers(2,3);
// console.log(result);//undefined because function doesn't return anyvalue.
// console.log(result)

function loginMessage(username){
    return `${username} just logged in`
}
// console.log(loginMessage("Raja"))//Raja just logged in
// console.log(loginMessage(""))// just logged in
// console.log(loginMessage())//undefined just logged in

function loginMessage2(username="sam"){
    if(!username){ //username === undefined
        console.log("Please enter the user name.");
        return
    }
    return `${username} just logged in`
}
result=loginMessage2()
console.log(result)
