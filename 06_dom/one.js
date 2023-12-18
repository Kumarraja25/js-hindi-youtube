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