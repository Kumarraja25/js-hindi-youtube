const score=400
console.log(score);

const balance = new Number(400);
console.log(balance);


console.log(balance.toString().length);
console.log(balance.toFixed(3));

const otherNo=34.89357;
console.log(otherNo.toFixed(2));//34.89
console.log(otherNo.toPrecision(3));//34.9
console.log(otherNo.toPrecision(2));//35
console.log(otherNo.toPrecision(4));//34.89

const hundreds=10000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));


/*********************       MATHS       ********************* */

console.log(Math);
console.log(Math.abs(-15));
console.log(Math.abs(5));
console.log(Math.round(3.784));
console.log(Math.ceil(3.1));
console.log(Math.floor(3.9));
console.log(Math.min(34,49,27,59,3,89));
console.log(Math.max(34,49,27,59,3,89));

console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10)+1);

const min=1;
const max=9;
console.log(Math.floor(Math.random()*(max-min+1))+min);