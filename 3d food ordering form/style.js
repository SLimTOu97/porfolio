let selectedchocie=document.querySelectorAll(".choice")
let border=document.querySelectorAll(".radio-btn-border")
let model=document.querySelector("model-viewer")

for(let x=0;x<selectedchocie.length;x++)
{

    selectedchocie[x].addEventListener("click",(e)=>{
        if(x==0){
            border[x].classList.add("selected")
            border[1].classList.remove("selected")
            border[2].classList.remove("selected")
            model.src="models/1.glb"
        }
        else if(x==1){
            border[x].classList.add("selected")
            border[0].classList.remove("selected")
            border[2].classList.remove("selected")
             model.src="models/2.glb"
        }
        else if(x==2){
            border[x].classList.add("selected")
            border[0].classList.remove("selected")
            border[1].classList.remove("selected")
             model.src="models/3.glb"
        }
    })
   
}