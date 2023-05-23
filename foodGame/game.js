const character = document.getElementById("character");
const characterDiv = document.getElementById("characterDiv");
const stance = document.getElementsByClassName("face-right");
const coin=document.getElementById("coin");
var position1=characterDiv.getBoundingClientRect();
const position2=coin.getBoundingClientRect();
var xOffset=0;
var yOffset=0;


character.style.animationPlayState = 'paused';
window.addEventListener("keyup",(e)=>{
    var keyReleased = e.key;
    character.style.animationPlayState = 'paused';
},true);

window.addEventListener(
    "keydown",
    (event) => {
      if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }
  
      switch (event.key) {
        case "ArrowDown":
            character.classList.remove("face-up","face-right","face-left");
            character.style.animationPlayState = 'running';
            yOffset+=50;
            moveSection();
            getCoin();
            break;

        case "ArrowUp":
            character.classList.add("face-up");
            character.classList.remove("face-right","face-left");
            character.style.animationPlayState = 'running';
            yOffset-=50;
            moveSection();
            getCoin();
            break;

        case "ArrowRight":
            character.classList.add("face-right");
            character.classList.remove("face-up","face-left");
            character.style.animationPlayState = 'running';
            xOffset+=20;
            moveSection();
            getCoin();
            break;

        case "ArrowLeft":
            character.classList.add("face-left");
            character.classList.remove("face-up","face-right");
            character.style.animationPlayState = 'running';
            xOffset-=20;
            moveSection();
            getCoin();
            break;
       
        default:
            return; // Quit when this doesn't handle the key event.
        }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
    },
    true
);

function moveSection() {
    var domElemnt = document.getElementById("characterDiv");
    if (domElemnt) {
        var transformAttr = ' translate(' + xOffset + ','+ yOffset+')';
       
        domElemnt.setAttribute('style', 'transform:translate('+ xOffset + 'px,' + yOffset+'px);');
        
    }
}

function getCoin(){
    let characterLeft = parseInt(window.getComputedStyle(characterDiv).getPropertyValue("left"));
    let coinLeft = parseInt(window.getComputedStyle(coin).getPropertyValue("left"));

    console.log("position of coin")
    console.log(position2.x);
    console.log(position2.y);
   
    console.log("position of character")
    console.log(position1.x);
    console.log(position1.y);
    
}

