const button = document.getElementById('button')
const backgroundImage = document.getElementById('bImg')
const image = document.getElementById('moonn')
const secondmoon = document.getElementById('secondmoonn')


function toggleBtn(){
    button.classList.toggle('active')
    backgroundImage.classList.toggle('backgroundImage')
    image.classList.toggle('on')
    secondmoon.classList.toggle('onsecondmoon')
    
}