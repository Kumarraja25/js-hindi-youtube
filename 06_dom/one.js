document.getElementById("title")
document.getElementById("title").id
document.getElementById("title").class
document.getElementById("title").className

document.getElementById("title").getAttribute
document.getElementById("title").getAttribute()
document.getElementById("title").getAttribute(id)
document.getElementById("title").getAttribute(class)
document.getElementById("title").getAttribute(all)

document.getElementById("title").setAttribute('class','title')
document.getElementById("title").setAttribute('class','title heading')

const title=document.getElementById("title")
title
title.style.backgroundColor="green"
title.style.padding="20px"
title.style.borderRadius="20px"

title.textContent
title.innerText
title.innerHTML

document.getElementsByClassName('heading')

document.querySelector('h1')
document.querySelector('h2')
document.querySelector('#title')
document.querySelector('.heading')
document.querySelector('input[type="password"]')

document.querySelector('ul')
const myul=document.querySelector('ul')
myul.querySelector('li')
const turngreen=myul.querySelector('li')
turngreen.style.backgroundColor='red'

document.querySelectorAll('li')
//NodeList(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: NodeList
const list=document.querySelectorAll('li')
//undefined
list.style.backgroundColor="green"
//VM1265:1 Uncaught TypeError: Cannot set properties of undefined (setting 'backgroundColor')
   // at <anonymous>:1:27
//(anonymous) @ VM1265:1
list[0].style.backgroundColor="green"
//'green'
list[1].style.backgroundColor="yellow"
//'yellow'
const headings=document.querySelectorAll('h1')
//undefined
headings[0].style.color="red"
//'red'

const newList=document.querySelectorAll("li")
newList.forEach((l)=>{l.style.backgroundColor="green"})

document.getElementsByClassName('list-item')
//HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]0: li.list-item1: li.list-item2: li.list-item3: li.list-itemlength: 4[[Prototype]]: HTMLCollectionitem: ƒ item()length: (...)namedItem: ƒ namedItem()constructor: ƒ HTMLCollection()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "HTMLCollection"get length: ƒ length()[[Prototype]]: Object
const tempClassList=document.getElementsByClassName('list-item')
//undefined
Array.from(tempClassList)
//(4) [li.list-item, li.list-item, li.list-item, li.list-item]0: li.list-item1: li.list-item2: li.list-item3: li.list-itemlength: 4[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
const myConvertedArray=Array.from(tempClassList)
//undefined
myConvertedArray.forEach(function (l){
    l.style.color="orange"
})
//undefined