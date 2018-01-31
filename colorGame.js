// rgb(red, green, blue)

// 6 hard coded colors
var colors = [
	// red
	"rgb(255, 0, 0)", 
	// yellow
	"rgb(255, 255, 0)",
	// green
	"rgb(0, 255, 0)",
	// magenta
	"rgb(0, 255, 255)",
	// blue
	"rgb(0, 0, 255)",
	// cyan
	"rgb(255, 0, 255)"
];

// selecting all squares
var squares = document.querySelectorAll(".square");
// hard coded magenta color selected
var pickedColor = colors[3];
// selected span in h1 to display color name
var colorDisplay = document.getElementById("colorDisplay");

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
			alert("Correct!");
		} 
		else {
			alert("WRONG!!!");
		}
	});
}