// for

for(let index=0;index<10;index++){
    const element=index;
    //if(element==5) 
      //console.log("5 is a best number")
    //console.log(element)
}


for(let i=0;i<10;i++){
    //console.log(`\n Outer loop value ${i}\n`)
    for(let j=0;j<10;j++){
        //console.log(`Inner loop value ${j}`)
        //console.log(`${i} * ${j} = ${i*j}`)
    }
}

let  myArray=['raja','radha','gopal','jagga']
for(let i=0;i<myArray.length;i++){
    //console.log(myArray[i])
}


// break and continue ....

for(let i=0;i<20;i++){
    if(i==5){
        console.log("Detected 5.")
        //break;
        continue;
    }
    console.log(`Value is ${i}`)
}
