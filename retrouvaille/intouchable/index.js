const buttonHeight = 50;
const buttonWidth  = 150;
var cpt = 1;
const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;


window.addEventListener('DOMContentLoaded',() => {

  const button = document.getElementById('button');
  // button.addEventListener('click', () => alert('you clic'))
  const btn = document.getElementById('btn');
  const cat = document.getElementById('cat');
  btn.style.display="none";
  cat.style.display="none";
  button.addEventListener('click', () =>{
    button.style.left = Math.floor(Math.random() * (maxWidth +1)) + 'px';
    button.style.top = Math.floor(Math.random() * (maxHeight +1)) + 'px';
    cpt = cpt +1 ;
    if (cpt==8) {
      button.style.display = "none" ;
      btn.style.display = "block"
    } 

  })
  btn.addEventListener('click',()=>{
    cat.style.display="block";
  })
});

