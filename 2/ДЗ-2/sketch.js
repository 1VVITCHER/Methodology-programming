let state = "idle"; 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  if (state === "idle") {
    drawIdle();
  } else if (state === "runLeft") {
    drawRunLeft();
  } else if (state === "runRight") {
    drawRunRight();
  } else if (state === "jump") {
    drawJump();
  } else if (state === "jumpLeft") {
    drawJumpLeft();
  } else if (state === "jumpRight") {
    drawJumpRight();
  }
}

function drawIdle() {
  rect(180, 200, 40, 60);
  ellipse(200, 170, 50, 50);
  line(180, 210, 150, 200); 
  line(220, 210, 250, 200); 
  line(190, 260, 190, 300);
  line(210, 260, 210, 300);
}

function drawRunLeft() {
  rect(180, 200, 40, 60);
  ellipse(200, 170, 50, 50);
  line(180, 210, 150, 200); 
  line(220, 210, 250, 200);
  line(190, 260, 180, 300);
  line(210, 260, 220, 300);
}

function drawRunRight() {
  rect(180, 200, 40, 60);
  ellipse(200, 170, 50, 50);
  line(180, 210, 150, 200); 
  line(220, 210, 250, 200); 
  line(190, 260, 200, 300);
  line(210, 260, 190, 300);
}

function drawJump() {
  rect(180, 180, 40, 60); 
  ellipse(200, 150, 50, 50);
  line(180, 200, 150, 180); 
  line(220, 200, 250, 180); 
  line(190, 240, 190, 280);
  line(210, 240, 210, 280);
}


function keyPressed() {
  if (key === '1') {
    state = "idle";
  } else if (key === '2') {
    state = "runLeft";
  } else if (key === '3') {
    state = "runRight";
  } else if (key === '4') {
    state = "jump";
  }
}