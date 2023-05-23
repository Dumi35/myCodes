var canvas = document.getElementById("canvas1");

canvas.width = screen.width;
canvas.height = screen.height;

var context = canvas.getContext("2d");

context.fillStyle='white';
context.fillRect(0,0,canvas.width,canvas.height);

const collisionsMap=[]; //empty array that will contain other arrays



for(var i=0; i<collision.length;i+=70){//we use 70 because I set the width to 70 in the Tile Editor
    collisionsMap.push(collision.slice(i,70+i));
}
console.log(collisionsMap);

class Boundary{
    static width = 48;
    static height = 48;
    constructor({position}){
        this.position = position;
        this.width = 48;
        this.height = 48;
    }
    draw(){
        context.fillStyle = 'rgba(255,0,0,0)';
        context.fillRect(this.position.x,this.position.y,this.width,this.height);
    }
}

const boundaries=[];
const offset = {
    x: -70,
    y: -300
};

collisionsMap.forEach((row,i) => { //iterating through each row
    row.forEach((symbol,j)=>{ //each element/column ish
        if (symbol === 1025)
            boundaries.push(
                new Boundary({
                    position:{
                        x:j*Boundary.width+offset.x, y:i*Boundary.height+offset.y // j was for each tile, i or y is for row whcih goes from up to down
                    } //I had to use offset.x to ensure the boundary rectangles fitted perfectly
                })
            )
    })
})

console.log(boundaries);


const mapImage = new Image(); //for the map
mapImage.src = "./images/PokemonMap.png"

const foregroundImage = new Image();
foregroundImage.src="./images/foregroundLayer.png"

var playerImage = new Image(); //for the player
playerImage.src="./images/playerDown.png";



class Sprite{
    constructor({position,velocity,image,frames={max:1}}){
        this.position = position;
        this.image = image;
        this.frames = {...frames,val:0,elapsed: 0};
        this.image.onload = ()=>{
            this.width = this.image.width/this.frames.max;
            this.height = this.image.height;
        }
        this.moving=false;
    }

    draw(){
             context.drawImage(this.image,
                this.frames.val*this.width,0,this.image.width/this.frames.max,this.image.height, 
                this.position.x,this.position.y, 
                this.image.width/this.frames.max,this.image.height); 
        
            if (this.moving){
                if (this.frames.max>1){
                    this.frames.elapsed++
                }
    
                if(this.frames.elapsed%14===0){
                    if(this.frames.val<this.frames.max-1)this.frames.val++
                    else this.frames.val=0
                }
            } else this.frames.val=0
        
    }
}

//https://github.com/nodejs/node-gyp#on-windows

const background = new Sprite({
    position: {x:offset.x,y:offset.y},
    image: mapImage
})

const foreground = new Sprite({
    position: {x:offset.x,y:offset.y},
    image: foregroundImage
})
const player = new Sprite({
    position:{x:canvas.width/2,y:canvas.height/2 + 90},
    image: playerImage,
    frames: {max:4}
})

const movables = [background,...boundaries,foreground]; //... is the spread operator which lets me use all the elements in the boundaries arrays
// boundaries is there so that it moves with the background and not the player

function rectangularCollision({rectangle1, rectangle2}){ //for checking if player collides with certain areas
    return(
        rectangle1.position.x + rectangle1.width>=rectangle2.position.x && 
        rectangle2.position.x + rectangle2.width>=rectangle1.position.x &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y&&
        rectangle2.position.y + rectangle2.height >= rectangle1.position.y
    )
}



function animate(){
    window.requestAnimationFrame(animate);
    background.draw();

    boundaries.forEach(boundary=>{
        boundary.draw();
    })
    player.draw();

    foreground.draw();

    player.moving=false;
    
    window.addEventListener(
        "keydown",
        (event) => {
          if (event.defaultPrevented) {
            return; // Do nothing if the event was already processed
          }
      
          switch (event.key) {
            case "ArrowDown":
                playerImage.src="./images/playerDown.png";
                player.moving=true;
                for (var i = 0; i<boundaries.length;i++){
                    var canMove = true;
                    const boundary = boundaries[i];
                    if (rectangularCollision({rectangle1:player, rectangle2:{...boundary,
                        position:{x:boundary.position.x, y:boundary.position.y-10}
                    }})){
                        console.log("Colliding");
                        canMove = false;
                        break;
                    }
                }
                if (canMove)
                movables.forEach((moving)=>{
                    moving.position.y-=10;
                })
                break;
    
            case "ArrowUp":
                playerImage.src="./images/playerUp.png";
                player.moving=true;
                for (var i = 0; i<boundaries.length;i++){
                    var canMove = true;
                    const boundary = boundaries[i];
                    if (rectangularCollision({rectangle1:player, rectangle2:{...boundary,
                        position:{x:boundary.position.x, y:boundary.position.y+10}
                    }})){
                        console.log("Colliding");
                        canMove = false;
                        break;
                    }
                }
                if (canMove)
                movables.forEach(moving=>{
                    moving.position.y+=10;
                })
                break;
    
            case "ArrowRight":
                playerImage.src="./images/playerRight.png";
                player.moving=true;
                for (var i = 0; i<boundaries.length;i++){
                    var canMove = true;
                    const boundary = boundaries[i];
                    if (rectangularCollision({rectangle1:player, rectangle2:{...boundary,
                        position:{x:boundary.position.x-10, y:boundary.position.y}
                    }})){
                        console.log("Colliding");
                        canMove = false;
                        break;
                    }
                }
                if (canMove)
                movables.forEach(moving=>{
                    moving.position.x-=10;
                })
                break;
    
            case "ArrowLeft":
                playerImage.src="./images/playerLeft.png";
                player.moving=true;
                for (var i = 0; i<boundaries.length;i++){
                    var canMove = true;
                    const boundary = boundaries[i];
                    if (rectangularCollision({rectangle1:player, rectangle2:{...boundary,
                        position:{x:boundary.position.x+10, y:boundary.position.y}
                    }})){
                        console.log("Colliding");
                        canMove = false;
                        break;
                    }
                }
                if (canMove)
                movables.forEach(moving=>{
                    moving.position.x+=10;
                })
                break;
           
            default:
                return; // Quit when this doesn't handle the key event.
            }
    
        // Cancel the default action to avoid it being handled twice
        event.preventDefault();
        },
        true
    );
    
   /*  let clicked = false; try using web audio api instead
    addEventListener("click",()=>{
        if(!clicked){
            sound.play();
            clicked = true;
        }
        
    }) */
}

animate();
