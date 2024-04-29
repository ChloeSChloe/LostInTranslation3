function setup() {
  createCanvas(500, 500);
  background('#8899AD');
  drawingshape();
}

function drawingshape() {
  textSize(32);
  fill(255);
  stroke(0);
  strokeWeight(4);
  text('Lost in Translation',100,50)
  stroke(197,197,197)
  strokeWeight(4);
  fill(46,237,240)
  rect(180,100,40,40)
  rect(220,100,40,40)
  
  rect(140,140,40,40)
  rect(180,140,40,40)
  rect(220,140,40,40)
  rect(260,140,40,40)
  rect(300,140,40,40)
  
  rect(140,180,40,40)
  rect(260,180,40,40)
  rect(300,180,40,40)
  
  rect(140,220,40,40)
  rect(220,220,40,40)
  rect(260,220,40,40)
  rect(300,220,40,40)
  
  rect(140,260,40,40)
  rect(180,260,40,40)
  rect(220,260,40,40)
  rect(260,260,40,40)
  rect(300,260,40,40)
  
  rect(140,300,40,40)
  rect(180,300,40,40)
  rect(220,300,40,40)
  rect(260,300,40,40)
  
  //makes all positions of bright red squares, in the order from left to right, top to bottem
  fill(235,41,36)
  rect(180,180,40,40)
  rect(220,180,40,40)
  
  rect(180,220,40,40)
  
  //makes all positions of pale blue grey squares, in the order from left to right, top to bottem//
  fill(215,226,226)
  rect(180,340,40,40)
  rect(220,340,40,40)
  
  
  fill(40,56,240)
  rect(140,340,40,40)
  rect(260,340,40,40)
  
  rect(180,380,40,40)
  rect(220,380,40,40)
  
  //makes all position of bright magenta square//
  fill(243,0,185)
  rect(100,300,40,40)
  
  //makes all position of pale pink grey square//
  fill(240,226,226)
  rect(60,260,40,40)  
  
}