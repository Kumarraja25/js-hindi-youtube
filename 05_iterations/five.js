// for each loop - Array
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