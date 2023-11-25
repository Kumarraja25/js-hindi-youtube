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
let nName = name.substring(0,4)
console.log(nName) ;
//slice // supports negative arguments
let sName = name.slice(-8,5)
console.log(sName) ;

//replace and includes 
const url="https://Raja.com/raja%20html"
console.log(url.replace("%20","-"));
console.log(url.includes("Raja"));

//trim, trimStart, trimEnd
let nickName="   Nabin   ";
console.log(nickName.trim());
console.log(nickName.trimStart());
console.log(nickName.trimEnd());

//split

let sDetails="Raja-CSE-2201109070-G:2";
console.log(sDetails.split("-"))


