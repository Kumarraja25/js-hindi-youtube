//falsy and truthy values
const user="rameshsgdu"
const userEmail=[]
if(user){
    //console.log("Got the user.")
}else{
    //console.log("user not found.")
}

//falsy value
// false , 0 , -0 , "" , BigInt 0n , null , undefined , NaN

//truthy value
// "0" , 'false' , [] , {} ," ", function(){}

if(userEmail.length===0){
    //console.log("Array is empty.")
}

const empObj={}
if(Object.keys(empObj).length===0){
    //console.log("Object is empty.")
}

//Nullish Coalescing Operator ?? for null and undefined

//const val1=5 ?? 10             // 5
//const val1=undefined?? 10      // 10
//const val1=null ?? 10          // 10
//const val1=null ?? undefined   // undefined
const val1=null ?? 10 ?? 50      // 10

console.log(val1)

//terniary operator
const val2=80
val2>20 ? console.log("greater than 20") : console.log("lesser than or equal to 20")
