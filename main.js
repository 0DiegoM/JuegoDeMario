img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_die = loadSound("mariodie.wav");
	mario_coin = loadSound("coin.wav");
    mario_kick = loadSound("kick.wav");
	mario_gameOver = loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
	img = loadImage("mario05.png");

}

function setup() {
	canvas = createCanvas(1240,336);
	video = createCapture(VIDEO);
	video.size(600, 300);
poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on("pose", gotPoses);
	canvas.parent("game_console");
	instializeInSetup(mario);
	
}

function gotPoses(results) {
if(results.length > 0) {
	noseX = results[0].pose.nose.x;
	noseY = results[0].pose.nose.y;
	console.log("coord nosex = "+ noseX + "coord nosey = "+ noseY);
}
}

function modelLoaded() {
console.log("Modelo Cargado :(")
}

function draw() {
	background("gray");
	if(noseX < 300) {
		marioX = marioX - 1;
	}
	if(noseX > 300) {
		marioX = marioX + 1;
	}

	if(noseY < 150) {
		marioY = marioY - 1;
	}
	image(img, marioX, marioY, 40, 70)
	game()
}






