// for in loops - object,array

const myObject={
    cpp:"c++",
    py:"python",
    js:"javascript",
    rb:"ruby"
}

for(let key in myObject){
    //console.log(key,"-",myObject[key])
}

const myArray=['python','java','cpp','javascript','c']
for(let key in myArray){
    console.log(`Index - ${key} and Value - ${myArray[key]}`)
}

// maps...

const state=new Map()
state.set('OD','Odisha')
state.set('GJ','Gujurat')
state.set('PJ','Punjab')
state.set('KL','Kerela')
state.set('KL','Kerela')


for(const s in state){
   //console.log(s)     // not iterable
}