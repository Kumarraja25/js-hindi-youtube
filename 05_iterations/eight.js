//Reduce

const numArray=[1,2,3,4]
const total=numArray.reduce(function (acc,item){
     console.log(`acc is ${acc} and current value is ${item}`)
     return acc+item
},0)
//console.log(total) //10

const total1=numArray.reduce((acc,item)=>item+acc,0)
console.log(total1)

const shoppingCard=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"py course",
        price:999
    },
    {
        itemName:"mob dev course",
        price:5999
    },
    {
        itemName:"data science course",
        price:12999
    },
]

console.log(shoppingCard.reduce((acc,item)=>acc+item.price,0))