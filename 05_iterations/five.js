// for each loop - Array....
// arrayName.forEach(callbackFunction)

const myArray=['python','java','cpp','javascript','c'] 
myArray.forEach(function(item){
    //console.log(item)
})

myArray.forEach((item)=>{
    //console.log(item)
})

function printIt(item){
    console.log(item)
}

//myArray.forEach(printIt)

myArray.forEach((item,index,arr)=>{
   // console.log(item,index,arr)
})

const myCoding=[
    {
        langName:"JavaScript",
        langExtension:"js"
    },
    {
        langName:"Python",
        langExtension:"py"
    },
    {
        langName:"Java",
        langExtension:"java"
    },
]

myCoding.forEach((item)=>{
    console.log(item.langName)
})

//filter ....
const myNumbs=[1,2,3,4,5,6,7]

// const newNumbs=myNumbs.filter((item)=> item > 4)
// console.log(newNumbs)

const newNumbs=myNumbs.filter((item)=> {
    return item > 4
})
console.log(newNumbs)

const newNumbs2=[]
myNumbs.forEach((item)=>{
    if(item>4){
        newNumbs2.push(item)
    }
})
console.log(newNumbs2)