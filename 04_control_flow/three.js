//falsy and truthy values
const user="rameshsgdu"
const userEmail=[]
if(user){
    console.log("Got the user.")
}else{
    console.log("user not found.")
}

//falsy value
// false , 0 , -0 , "" , BigInt 0n , null , undefined , NaN

//truthy value
// "0" , 'false' , [] , {} ," ", function(){}

if(userEmail.length===0){
    console.log("Array is empty.")
}

const empObj={}
if(Object.keys(empObj).length===0){
    console.log("Object is empty.")
}
