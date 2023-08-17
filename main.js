class Game {
    constructor() {
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
            }
        });
    
    }
   
}

class Player {
    constructor() {
        this.width = 2.5;
        this.height = 5;
        this.positionX = 50 - (this.width / 2);
        this.positionY = 0;
        
        


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
        this.gravity()
    }
    gravity(){
      if(this.domElement.style.bottom > 0+"vh"){ setInterval(()=>{
    
            this.positionY--;
            this.domElement.style.bottom = this.positionY +"vh"
            console.log("falling");    
    
       },500)
    }
    }


}

const game = new Game();
game.start();
