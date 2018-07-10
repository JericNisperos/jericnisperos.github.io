
var play = false;
var ripple = [];
function setup() {
  ctx = createCanvas(windowWidth, windowHeight);
  background(51);
  push();
  text("PLAY", width / 2, height / 2);
  pop();

}

function draw() {

 background(51);

  for(var  i = 0; i < ripple.length; i++) {

    ripple[i].show();
    ripple[i].bigger();

         if(ripple[i].a >= 250) {
            ripple.splice(i,1);
     }
  }

  if(random(1) > 0.01) {
    ripple.push(new Ripples(random(width), random(height)));
    ripple.push(new Ripples(random(width), random(height)));

  }




}
function Ripples(x, y) {
  this.a = random(5,10);
    this.x = x;


  this.y = y;



  this.show = function() {
    push();
    stroke(255, 255 - this.a);
    strokeWeight(10 - this.a*4);
    noFill();
    // fill(255, 255 - this.a);
    ellipse(this.x, this.y, this.a);
    pop();
  }

  this.bigger = function() {
     this.a+=5;

  }
}








function mouseDragged() {


    ripple.push(new Ripples(mouseX, mouseY));













   //   if (!play) {
   //     setup();
   //     play = true;
   // }


}

function keyPressed() {
  if (key == 'M' && !play) {
    setup();
    play = true;
  }
}

