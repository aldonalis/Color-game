// rgb(red, green, blue)
var numOfSquares =6
var colors = generateRandomColors(numOfSquares);

// selecting all squares
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
// selected span in h1 to display color name
var colorDisplay = document.getElementById("colorDisplay");
// slect message span
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")

easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected")
	hardBtn.classList.remove("selected")
	numOfSquares = 3
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function() {
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numOfSquares = 6;
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
})

resetButton.addEventListener("click", function() {
	// generates all new colors
	colors = generateRandomColors(numOfSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change h1 to match selected color
	colorDisplay.textContent = pickedColor;
	// change colors of squares
	for (var i = 0; i < squares.length; i++) {
	// add initial colors to squares
		squares[i].style.backgroundColor = colors[i]
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	this.textContent = "New Colors";
});

// change h1 to selected color
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i]

	// add click listeers to squares
	squares[i].addEventListener("click", function() {
		// grab color to clicked square
		var clickedColor = this.style.backgroundColor;
		// compare color to pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?"
		} 
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again";
		}
	});
}

function changeColors(color) {
	// loop through all squares
	for (var i = 0; i < squares.length; i++) {
		// change each square to match given color
		squares[i].style.backgroundColor = color;
	}
}

// pick one of six colors to be correct
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make an array
	var arr = [];
	// add num random colors to array
	for (var i = 0; i < num; i++) {
		// get random color and push it into array
		arr.push(randomColor());
	}
	// return that array
	return arr;
}

function randomColor() {
	// Pick red from 0 to 255 
	var r = Math.floor(Math.random() * 256);
	// Pick greenfrom 0 to 255 
	var g = Math.floor(Math.random() * 256);
	// Pick blue from 0 to 255 
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}