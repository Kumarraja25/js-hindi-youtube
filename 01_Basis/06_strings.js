let home = "Sambalpur"
const repoCount= 10
console.log("raja" + repoCount + "value")

//String manipulations
console.log(`I'm from ${home} and I have ${repoCount} repositories till today `)

let name=new String('Raja Kumar Bisi')
console.log(name) // return a object type data so key-value pairs is their..

console.log(name[3]) // return 'a' value of index 3
console.log(name.__proto__) ;
console.log(name.length) ;
console.log(name.toUpperCase()) ;
console.log(name.charAt(2)) ;
console.log(name.indexOf("a"));

//substrings // don't supports negative arguments
let nName = name.substrings(0,4)
console.log(nName) ;
//slice // supports negative arguments
let sName = name.slices(-8,5)
console.log(sName) ;
