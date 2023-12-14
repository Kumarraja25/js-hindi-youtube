

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
// console.log(result)

//Rest operator for mutiple argument passing
function calculateCartPrice(val1,val2,...num){
    return num;
}
console.log(calculateCartPrice(100,200,300,500,600));//returns a array [ 300, 500, 600 ]
  
const user={
    userName:"Raja",
    id:70
}

function handleObject(anyObject){
    console.log(`Username id is ${anyObject.userName} and id is ${anyObject.id}`);
}
// handleObject(user)

handleObject({
    userName:"Raja Kumar Bisi",
    id:2201109070
})

const myNewArray=[2,445,89]
function returnSecondNumber(getArray){
    return getArray[1]
}

// console.log(returnSecondNumber(myNewArray));
console.log(returnSecondNumber([200,578,789]));