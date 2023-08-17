class Game {
    constructor() {
        this.climb = new Climb()
        this.player = new Player();
        
    }
    start() {

        // attach event listeners
        this.attachEventListeners();

        

    }
    attachEventListeners() {
        document.addEventListener("keydown", (event) => {
            if (event.key === "ArrowLeft") {
                this.player.moveLeft()
                
            } else if (event.key === "ArrowRight") {
                this.player.moveRight()
                
            } else if (event.key === " ") {
                this.player.jump()
                this.gravity()
            }
        });
    }
    gravity(){
        let drop = setInterval(()=>{
            if(this.player.positionY > this.climb.height){
                this.player.positionY -= this.player.velocity.y
                this.player.domElement.style.bottom = this.player.positionY +"vh" 
                this.player.velocity.y += 0.5
                console.log("falling")
            } else { 
            this.player.velocity.y = 0 
            clearInterval(drop)}
       },100)
    }
}

class Player {
    constructor() {
        this.width = 2.5;
        this.height = 5;
        this.positionX = 50 - (this.width / 2);
        this.positionY = 80;
        this.velocity = {
            x: 0,
            y: 1,
        }
        


        this.domElement = null;

        this.createDomElement();
        
    }
    createDomElement() {
        // create dom element
        this.domElement = document.createElement("div");

        // set id
        this.domElement.id = "player";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";

        //append to the dom
        const parentElm = document.getElementById("climb")
        parentElm.appendChild(this.domElement)
    }
    moveLeft() {       
        this.positionX--
        this.domElement.style.left = this.positionX + "vw"
    }    
    moveRight() {
        this.positionX++
        this.domElement.style.left = this.positionX + "vw"
    }
    jump(){
        this.positionY += 5
        this.domElement.style.bottom = this.positionY + "vh"
        console.log("jumping")
        
    }
   

}

class Climb{
    constructor(){
        this.width = 100
        this.height = 10
        this.positionY = 0
        this.domElement = null
    
        this.createDomElement()
    }
    createDomElement(){
        this.domElement = document.createElement("div")
        this.domElement.id = "ground"
        this.domElement.style.width = this.width + "vw"
        this.domElement.style.height = this.height +"vh"
        this.domElement.style.bottom = this.positionY +"vh"
        
        const parentElm = document.getElementById("climb")
        parentElm.appendChild(this.domElement)
    }
}

const game = new Game();
game.start();
