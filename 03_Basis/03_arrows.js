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