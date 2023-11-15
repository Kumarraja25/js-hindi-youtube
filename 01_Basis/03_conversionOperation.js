let num = 5925
let str = String(num)
console.log(typeof num)
console.log(typeof (str))

let emp = null
console.log(typeof emp)

let numstr = "33abd"
let number = Number(numstr);
console.log(number)
//NaN -> not a number
console.log(typeof number)
//number

let input=true
console.log(typeof input)
//boolean
console.log(Number(input))
//1
 
let nam = ""
let fullnam = "Raja"
console.log(Boolean(nam))
//false for empty string
console.log(Boolean(fullnam))
//true for non empty string

//"33" => 33
//"33abc" => NaN
//true => 1, false => 0
//"" => false
//"Raja" => true
//0 => false, 1 => true
