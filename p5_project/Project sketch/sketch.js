// Jeremy Leung
var xPOS; //variable to control the horizontal movement of the circle
var xSpeed; //variable to control the horizontal speed of the circle
var yPOS; //variable to control the horizontal movement of the circle
var ySpeed; //variable to control the horizontal speed of the circle
var s = 3; //variable to control the speed of the circle
var w = window.innerWidth -1; //global variable to set the width of the canvass
var h = window.innerHeight -2; //global variable to set the height of the canvas
var randomColor; //global variable to set a random color for the drawinglike function
var switcher = false; //inilitialize switcher variable to false to be able to called on by mousePressed functio
var secondCanvas; // var to create a second canvas that is layered ontop the default canvas

function setup()
{	//setup function that
	createCanvas(w,h);
	secondCanvas = createGraphics(w,h)
	secondCanvas.clear();
	background(0);
	xPOS = random(h);
	yPOS = random(w);
	xSpeed = 5;
	ySpeed = 3;
}
function draw()
{	//draw function that calles the other methongs utilizing that this function loops
	background(128, 128, 128);
	if(mouseIsPressed)
	{
		drawingLine();
	}
	image(secondCanvas, 0, 0);
	bouncingBall();
	textAlign(CENTER, TOP);
	text('Click and drag to draw a line on this canvas', (w/2), (h/2));
	
}
function bouncingBall()
{
	//circle that changes color when is hits the walls of the canvas
	ellipse(xPOS, yPOS, 50, 50);
	if(xPOS > width || xPOS < 0)
	{
		fill(random(255), random(255), random(255), 255);
		xSpeed = xSpeed * -1; 
	}
	if(yPOS > height || yPOS < 0)
	{ 
		fill(random(255), random(255), random(255), 255);
		ySpeed = ySpeed * -1;
	}
	xPOS = xPOS + xSpeed;  
	yPOS = yPOS - ySpeed;
}
function drawingLine()
{
	//controls the ellipse following the mouse creating a line when mouse is pressed
	secondCanvas.fill (255, 203, 164, 100);
	secondCanvas.noStroke();
	secondCanvas.ellipse(mouseX, mouseY, 15, 15);
}
