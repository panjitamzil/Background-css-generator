var p1 = document.querySelector("#first");
var p2 = document.querySelector("#second");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("button");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + " )";
	p1.textContent = "First code color : " + color1.value;
	p2.textContent = "Second code color : " + color2.value;
}

function random(number){
	return Math.floor(Math.random()*(number+1));
}

function setRandomGradient() {
	var randomColor = "rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")";
	var randomColor2 = "rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")";
	body.style.background = "linear-gradient(to right, " + randomColor + ", " + randomColor2 + " )";
	p1.textContent = "First code color : " + randomColor;
	p2.textContent = "Second code color : " + randomColor2;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", setRandomGradient);