class Cannon{
    constructor(x,y,width,height,angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
    }

    display(){
        console.log(this.angle); // 1

        // change the angle upwards when left arrow key is pressed
        if(keyIsDown(LEFT_ARROW) && this.angle > -1.45){ //2 
            this.angle = this.angle - 0.02;
        }

        // change the angle downwards when right arrow key is pressed
        if(keyIsDown(RIGHT_ARROW) && this.angle < 0.35){ // 3
            this.angle = this.angle + 0.02;
        }

        fill("#676e6a");

        push();
        translate(this.x,this.y);
        rotate(this.angle);
        rect(-10,-20,this.width,this.height);
        pop();

        arc(this.x-35, this.y+90,150,230,PI,TWO_PI);
        noFill();
    }
}