let button = document.getElementById('button')
let backgroundImage = document.getElementById('bImg')
let image = document.getElementById('moonn')
let welcome = document.querySelector('#wel')


function toggleBtn(){
    button.classList.toggle('active')
    backgroundImage.classList.toggle('backgroundImage')
    // image.classList.toggle('moon')
    welcome.classList.toggle('welcome')
    
}

document.querySelector('#button').addEventListener('click', hide)
function hide(){
  document.getElementById('moonn').classList.toggle('moon')
  
}
// const backgroundImage = document.querySelector('#bImg')
// const image = document.querySelector('#moonn')
// const welcome = document.querySelector('#wel')
// const button = document.querySelector('#button')
// 
// document.querySelector('#button').addEventListener('click', btn)
// function btn(){
//   button.classList.toggle('active')
//   image.classList.toggle('backgroundImage')
//   welcome.classList.toggle('welcome')
//   
// }
// document.querySelector('#bImg').addEventListener('click', image)
// function image(){
//   button.classList.toggle('backgroundImage')
//   
// }


// const andi = document.querySelector('#andi')
// const claire = document.querySelector('#claire')
// const sharleen = document.querySelector('#sharleen')
// 
// document.querySelector('#andiNext').addEventListener('click', andiNext)
// document.querySelector('#claireNext').addEventListener('click', claireNext)
// document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)
// 
// function andiNext(){
// 	claire.classList.add('hidden')
// 	sharleen.classList.add('hidden')
// 	andi.classList.toggle('hidden')
// }
// 
// function claireNext(){
// 	andi.classList.add('hidden')
// 	sharleen.classList.add('hidden')
// 	claire.classList.toggle('hidden')
// }
// 
// function sharleenNext(){
// 	andi.classList.add('hidden')
// 	claire.classList.add('hidden')
// 	sharleen.classList.toggle('hidden')
// }