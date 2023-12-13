// const obj=new Object() // singleton 
const user={} //non singleton
user.id="123mak";
user.name="Rohan";
user.isloggedin=false;

// console.log(user);

const user2={
    email:"rudra5907@gmail.com",
    details:{
        fullname:{
            firstName:"Rudra",
            lastName:"Prakash Raj"
        }
    }
}
// console.log(user2.details)//{ user_f_name: { firstName: 'Rudra', lastName: 'Prakash Raj' } }
// console.log(user2.details.fullname)//{ firstName: 'Rudra', lastName: 'Prakash Raj' }
// console.log(user2.details.fullname.firstName)//Rudra

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}
// const obj4={obj1,obj2}
// const obj4=Object.assign({},obj1,obj2)//target{},sources
const obj4={...obj1,...obj2}//spread operator
// console.log(obj4);

const list=[
    {
        id:"1562"
    },
    {
        id:"1558"
    },
    {
        id:"1590"
    },
    {
        id:"1535"
    }
]
// console.log(list[1].id); // 1558

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

//property check
console.log(user.hasOwnProperty("islogged"));//false isloggedin
