// for of

let numbers=[1,2,3,4,5,6]
for(const num of numbers){
    //console.log(`Value is ${num}`)
}

const greetings='Hello World!'
for(const greet of greetings){
    if(greet==' ')
       continue;
    //console.log(`Character is ${greet}`)
}

// maps...

const state=new Map()
state.set('OD','Odisha')
state.set('GJ','Gujurat')
state.set('PJ','Punjab')
state.set('KL','Kerela')
state.set('KL','Kerela')

//console.log(state)

for(const s of state){
    //console.log(s)
}
for(const [s,v] of state){
    //console.log(s,':',v)
}

const myObject={
    game1:"city racing",
    game2:"subway suffer"
}
for(const [key,value] of myObject){
   //console.log(key,':',value) //not iterable
}
