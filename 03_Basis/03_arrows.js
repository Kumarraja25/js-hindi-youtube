const user={
    username:"raja",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website.`);
        // console.log(this);
    }
    
}

// user.welcomeMessage()
// user.username="RKb"
// user.welcomeMessage()

// console.log(this) // {} empty object because nothing present in global
// for browser global is window object

function hey(){
    // console.log(this)
    let username="Raja"
    console.log(this.username) //undefined
}
hey()

const hey1=function(){
    username="Raja"
    console.log(this.username)
}
hey1()

//arrows function ... () => {}

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

// const addTwo=(num1,num2)=> num1+num2   //implicit form
//const addTwo=(num1,num2)=> {username:"Raja"}  //undefined
const addTwo=(num1,num2)=> ({username:"Raja"})
console.log(addTwo(5,14)) // 19
 