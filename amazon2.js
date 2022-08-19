const secondtop2imgTag =document.querySelector(".secondtop2img ")
const sisesliderTag =document.querySelector(".siseslider")
const bodyTag =document.querySelector(".body")
const secondbdTag =document.querySelector(".secondbd ") 
const clickdisspearTag =document.querySelector(".clickdisspear")
const hellosinginTag =document.querySelector(".hellosingin")
const xlogoTag=document.querySelector(".xlogo")
secondtop2imgTag.addEventListener("click", () => {
    sisesliderTag.style.display = "inline"
    bodyTag.style.overflow = "hidden"
    is = 1 ;
    console.log(is)
   
    if (is === 1  ) {
        xlogoTag.addEventListener("click", () => {
            sisesliderTag.style.display = "none"
            bodyTag.style.overflow = ""
            is = 0 ;

        })
        clickdisspearTag.addEventListener("click", () => {           
            sisesliderTag.style.display = "none"
            bodyTag.style.overflow = ""
            is = 0 ;
        });
    
    }

});
hellosinginTag.addEventListener( "click" , () => {
    console.log("it working100")

} );


