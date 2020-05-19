window.addEventListener("load", main);

// Canvas:
let canvas;
let ctx;
let scorelabel;

// Game:
let timer;
let fps = 10;

// Board:
let ts = 20;
let gw = gh = 20;

// Snake:
let vx = vy = 0;
let sx = sy = 10;
let px = py = 10;
let tail = 5;
let trail = [];

// Apple:
let ax = ay = 15;
let score = 0;

// Swipe gestures:
let xdown = ydown = null;

function main()
{
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	scorelabel = document.getElementById("score-label");

	resizegame();

	sx = Math.floor(gw / 2);
	sy = Math.floor(gh / 2);

	window.addEventListener("resize", resizegame);

	document.addEventListener("keydown", keypress);

	canvas.addEventListener("touchstart", touchdown, false);
	canvas.addEventListener("touchmove", touchmove, false);

	start();
}

function touchdown(e)
{
	const firsttouch = e.touches[0];
	xdown = firsttouch.clientX;
	ydown = firsttouch.clientY;
}

function touchmove(e)
{
	if (!xdown || !ydown)
	{
		return;
	}

	let xup = e.touches[0].clientX;
	let yup = e.touches[0].clientY;

	let xdiff = xdown - xup;
	let ydiff = ydown - yup;

	let direction;
	if (Math.abs(xdiff) > Math.abs(ydiff))
	{
		if (xdiff > 0)
		{
			direction = "left";
		} else {
			direction = "right";
		}
	} else {
		if (ydiff > 0)
		{
			direction = "up";
		} else {
			direction = "down";
		}
	}

	handleSwipe(direction);

	xdown = ydown = null;
}

function handleSwipe(direction)
{
	switch (direction)
	{
		case "left":
			if (vx != 0)
			{
				break;
			}
			vx = -1;
			vy = 0;
			break;
		case "up":
			if (vy != 0)
			{
				break;
			}
			vx = 0;
			vy = -1;
			break;
		case "right":
			if (vx != 0)
			{
				break;
			}
			vx = 1;
			vy = 0;
			break;
		case "down":
			if (vy != 0)
			{
				break;
			}
			vx = 0;
			vy = 1;
			break;
	}
}

function start()
{
	tail = 5;
	trail = []
	px = sx;
	py = sy;
	for (let i = 0; i < 5; i++) {
		trail.push({x: px, y: py + 5 - i});
	}
	vx = 0;
	vy = -1;

	ax = Math.floor(Math.random() * gw);
	ay = Math.floor(Math.random() * gh);

	play();
}

function update()
{
	px += vx;
	py += vy;

	if (px < 0 || px >= gw || py < 0 || py >= gh)
	{
		die();
	}

	for (let i = 0; i < trail.length; i++) {
		if (px == trail[i].x && py == trail[i].y)
		{
			die();
		}
	}

	trail.push({x: px, y: py});
	while (trail.length > tail)
	{
		trail.shift();
	}

	if (px == ax && py == ay)
	{
		gotapple();
	}
}

function render()
{
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = "red";
	ctx.fillRect(ax * ts, ay * ts, ts - 2, ts - 2);

	ctx.fillStyle = "lime";
	for (let i = 0; i < trail.length; i++) {
		ctx.fillRect(trail[i].x * ts, trail[i].y * ts, ts - 2, ts - 2);
	}
}

function keypress(e)
{
	if (timer == -1 && e.keyCode != 32)
	{
		return;
	}
	switch (e.keyCode)
	{
		case 32:
			togglepause();
			break;
		case 37:
			if (vx != 0)
			{
				break;
			}
			vx = -1;
			vy = 0;
			break;
		case 38:
			if (vy != 0)
			{
				break;
			}
			vx = 0;
			vy = -1;
			break;
		case 39:
			if (vx != 0)
			{
				break;
			}
			vx = 1;
			vy = 0;
			break;
		case 40:
			if (vy != 0)
			{
				break;
			}
			vx = 0;
			vy = 1;
			break;
	}
}

function gotapple()
{
	tail++;
	score++;
	scorelabel.innerHTML = "Score: " + score;
	ax = Math.floor(Math.random() * gw);
	ay = Math.floor(Math.random() * gh);
}

function die()
{
	score = 0;
	scorelabel.innerHTML = "Score: 0";
	tail = 5;
	trail = []
	px = sx;
	py = sy;
	for (let i = 0; i < 5; i++) {
		trail.push({x: px, y: py + 5 - i});
	}
	vx = 0;
	vy = -1;
}


function play()
{
	timer = setInterval(function()
	{
		update();
		render();
	}, 1000 / fps);
}


function resizegame()
{
	canvas.width = window.innerWidth - 2;
	canvas.height = window.innerHeight - 2;

	gw = Math.floor(canvas.width / ts);
	gh = Math.floor(canvas.height / ts);

	canvas.width -= canvas.width - (gw * ts);
	canvas.height -= canvas.height - (gh * ts);

	if (ax >= gw)
	{
		ax = Math.floor(Math.random() * gw);
	}
	if (ay >= gh)
	{
		ay = Math.floor(Math.random() * gh);
	}
}
