const s_Frnds=["Rudra","Pratik","Ananta","Sachi"];
const c_Frnds=["Radha","Rajat","Saniel","Sanket"];

s_Frnds.push(c_Frnds);
// console.log(s_Frnds[4]);     // c_Frnds 

// console.log(s_Frnds[4][1]);    //Rajat

// // Concat- returns a new array
const all_Frnds=s_Frnds.concat(c_Frnds);
// console.log(all_Frnds);

// spread operator 
const my_Frnds=[...s_Frnds,...c_Frnds];
// console.log(my_Frnds);

// flat 
const another_arr=[1,2,3,[4,5,6],7,[8,[9,10,[11,12]]]];
const useable_arr=another_arr.flat(Infinity) // argument-> depth 
// console.log(useable_arr);

// Array operations

// console.log(Array.isArray("Raja")); // false
// console.log(Array.from("Raja")); 
console.log(Array.from({name:"raja"})); // empty array because key or value noat mentioned

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3)); 