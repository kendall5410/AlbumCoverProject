let image1
let eyeSquare1=250;
let eyeSquare2=250;
let eyeSquare3=250;
let ele;

let square1speed = 3
let square1x = 98
let square2speed= 3
let square2x = 262
let square3speed = -3
let square3x = 563
let parental="PARENTAL"
let advisory="ADVISORY"
let explicit="EXPLICIT CONTENT"

function preload(){
image1 = loadImage("goodkid.jpg");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
  imageMode(CENTER);

 ele = createAudio('Sing_About_Me_Im_Dying_Of_Thirst_(getmp3.pro).mp3');
  ele.autoplay(true);
}

function draw() {
	print(mouseX,mouseY);
  image(image1,343,158,680,520);
  
  //eyeSquare1
  fill (0,0,0);
 // let eyeSquare1 = rect(98,80,90,15)
  rect(square1x,80,90,15)
  square1x+= square1speed
  if (square1x > 675-90){
    square1speed=-square1speed
  }
  if (square1x==98){
    square1speed=0
  }
  
  //eyeSquare2
  fill(0,0,0);
  //let eyeSquare2 = rect(262,80,95,15)
  rect(square2x,80,95,15)
  square2x+= square2speed
  if (square2x > 675-90){
    square2speed=-square2speed
  }
  if (square2x==262){
    square2speed=0
    }
  //eyeSquare3
  fill (0,0,0);
  // let eyeSquare3 = rect(563,48,95,15);
  rect(square3x,48,95,15)
  square3x+= square3speed
  if (square3x < 0){
    square3speed=-square3speed
  }
  if (square3x==563){
    square3speed=0
  }
  
  //text("P" + " " +  "A" + " " + "R" + " " + "E" + " " + "N" + " " + "T" + " " + "A" + " " + "L", 550,350);
  //update variables
  keyPressed()
}
function keyPressed(){
   //parental square 
  fill(0,0,0)
  rect(515,335,143,20)
  //advisory square 
  fill(247,244,233)
  rect(515,356,143,26)
  //explicit content square 
  fill(0,0,0)
  rect(515,383,143,20)
  

  
  //parental
  fill(random (255),random (255),random (255))
  textSize(20);
  text(parental,535,350)

  //advisery
  fill(random (255),random (255),random (255))
  textSize(25);
  text(advisory,520,378)

  //explicit content
  fill(random (255),random (255),random (255))
  textSize(15);
  text(explicit,515,400)

}
