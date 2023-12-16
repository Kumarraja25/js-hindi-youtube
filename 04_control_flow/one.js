// logic control or control flow...

if (2!="3"){
    console.log("Executed.") // executed
}
// < , > , <= , >= , == , != , === , !==

if (2==="2"){
    console.log("Executed.") 
}

const userLoggedIn=true;
if(userLoggedIn){
    console.log("Executed.")  // executed
}

// const temp=41

// if(temp>50){
//     console.log("Temperature greater than 50")
// }
// else{
//     console.log("Temperature less than 50")
// }

// const score=200
// if(score>100){
//     let power="Fly"
//     console.log(`power : ${power}`)
// }
// console.log(`power : ${power}`) ..power not defined

//implicit scope
const balance=2000
if(balance>500) console.log("Test")

const debitCart=true
if(userLoggedIn && debitCart){
    console.log("Allow to buy")
}

const loggedInFromGoogle=true
const loggedInFromYahoo=false
if(loggedInFromGoogle || loggedInFromYahoo){
    console.log("User logged in")
}