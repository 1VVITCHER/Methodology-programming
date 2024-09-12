function setup() {
    createCanvas(1024, 576);
}

function draw() {
    background(100, 155, 255); // fill the sky blue

    noStroke();
    fill(0, 155, 0);
    rect(0, 432, 1024, 144); // draw some green ground

    // 1. a cloud in the sky
    noStroke();
    fill(255);
    ellipse(200, 100, 100, 55);
    ellipse(150, 90, 100, 55);
    ellipse(250, 90, 100, 55);

    // 2. a mountain in the distance
    noStroke();
    fill(128, 128, 128);
    triangle(600, 50, 500, 550, 700, 550);

    // 3. a tree
    noStroke();
    fill(150, 75, 0);
    rect(800, 346, 35, 150);
    fill(0, 128, 0);
    triangle(818, 200, 725, 350, 900, 350);

    // 4. a canyon
    stroke(77, 34, 14);
    strokeWeight(18); 
    fill(76, 109, 27);
    line(50, 440, 75, 465);
	line(75,465,40,500)
	line(40,500,85,530)
	line(85,530,10,620)

	stroke(77, 34, 14);
    strokeWeight(18); 
    fill(76, 109, 27);
    line(70, 440, 95, 465);
	line(95,465,60,500)
	line(60,500,105,530)
	line(105,530,30,620)

    // 5. a collectable token - e.g. a jewel, fruit, coins
    stroke(0, 0, 0);
	strokeWeight(5);
    fill(255, 215, 0);
    ellipse(400, 375, 60, 60);

    textSize(32);
    fill(0, 128, 0);
    text('$', 392, 386);
}