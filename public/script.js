var socket = io();

function setup(){
	createCanvas(800, 600);
	background(100);
}

function draw(){
	clear();
	rect(300, 200, 100, 100);
}

io.connect('127.0.0.1:3000');