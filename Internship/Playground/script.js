let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let myWorks = document.getElementsByClassName("myWorks")[0]

window.addEventListener("scroll",()=>{
    value = window.scrollY;
    console.log(value)
    
    text.style.marginTop=value*2.5 + "px"
    leaf.style.top=value*-1 + "px"
    leaf.style.left=value*1 + "px"
    
    hill4.style.left=value*-1 + "px"
    hill5.style.left=value*1 + "px"
    /*  */
})

