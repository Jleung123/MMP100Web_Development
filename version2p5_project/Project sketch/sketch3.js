// Jeremy Leung
var xPOS; //variable to control the horizontal movement of the circle
var xSpeed; //variable to control the horizontal speed of the circle
var yPOS; //variable to control the horizontal movement of the circle
var ySpeed; //variable to control the horizontal speed of the circle
var s = 3; //variable to control the speed of the circle
var w = window.innerWidth; //global variable to set the width of the canvass
var h = window.innerHeight; //global variable to set the height of the canvas
var randomColor; //global variable to set a random color for the drawinglike function
var switcher = false; //inilitialize switcher variable to false to be able to called on by mousePressed functio

function setup()
{	//setup function that
	createCanvas(w, h);
	mousePressed();
	background(0);
	xPOS = random(h);
	yPOS = random(w);
	xSpeed = 7;
	ySpeed = 7;
}
function draw()
{	//draw function that calles the other methongs utilizing that this function loops
	shapes();
	boucne();
	drawingLine();
}
function mousePressed()
{	//swichted the canvas on click
	switcher = !switcher;
	if(switcher)
	{
		background(255);
	}
	if(!switcher)
	{
		background(0);
	}
}
function shapes ()
{
	//circle
	fill(255);
	ellipse(xPOS, yPOS, 40, 40);
}
function drawingLine()
{
	//drawing line that followes the mouse
	randomColor = color(random(255),random(255),random(255));
	fill (randomColor);
	noStroke();
	ellipse(mouseX, mouseY, 15, 15);
}
function boucne ()
{
	//controls the bouncing of the ball
	if(xPOS > width || xPOS < 0)
	{ 
		xSpeed = xSpeed * -1; 
	}
	if(yPOS > height || yPOS < 0)
	{ 
		ySpeed = ySpeed * -1;
	}
	xPOS = xPOS + xSpeed;  
	yPOS = yPOS - ySpeed;
}