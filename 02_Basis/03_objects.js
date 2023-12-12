// singleton object constructor
// Object.create

// object literals...
const obj={} // declaration

const mySym=Symbol("Key1");
const user={
    name:"raja",
    age:20,
    "home":"Lucknow",
    mySym1:"rafga", 
    [mySym]:"123",
    location:"PMEC",
    isloggedin:false,
    lastLoginDays:['Monday','Thursday']
}

// console.log(user.name);
// console.log(user["name"]);
// console.log(user["home"]);
// console.log(user[mySym]); 
// console.log(typeof user.mySym1); 

//lock value
user.name="RKB"
// Object.freeze(user);
user.name="Raja Kumar Bisi"
// console.log(user);

// function in object
user.greetings= function(){
    console.log("Hello JS user.")
}
user.greetings2= function(){
    console.log(`Hello JS user,${this.name}`)
}

console.log(user.greetings);//undefined
console.log(user.greetings());
console.log(user.greetings2());