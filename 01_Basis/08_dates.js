 // Dates

 let myDate= new Date();
//  console.log(myDate); 
//  console.log(myDate.toString()); 
//  console.log(myDate.toDateString()); 
//  console.log(myDate.toLocaleString()); 
//  console.log(myDate.toJSON()); 
//  console.log(myDate.toTimeString()); 
//  console.log(myDate.toISOString()); 
// console.log(typeof myDate);

let myCreatedDate=new Date(2023,11,3);
// In js months start from 0 ..
// console.log(myCreatedDate.toDateString());

// let myCreated_Date=new Date(2023,11,3,17,30);
let myCreated_Date=new Date("12-3-2023");
// console.log(myCreated_Date.toLocaleString());

let myTimeStamp= Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
console.log(newDate.getDate())
console.log(newDate.getMonth()+1)
console.log(newDate.getFullYear())
console.log(newDate.getDay())
console.log(newDate.getTime())

// newDate.toLocaleString('Default',{
//     weekday:"long".

//     } 
// )
