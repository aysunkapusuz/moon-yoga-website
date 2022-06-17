let button = document.getElementById('button')
let backgroundImage = document.getElementById('bImg')
let image = document.getElementById('moonn')
let welcome = document.getElementById('wel')


function toggleBtn(){
    button.classList.toggle('active')
    backgroundImage.classList.toggle('backgroundImage')
    welcome.classList.toggle('welcome')
    // image.classList.toggle('moon')
    if (img) {
        document.getElementById('moonn').src = 'moon.jpg';
      } else{
        document.getElementById('moonn').src = '';
        
      }
    
}
