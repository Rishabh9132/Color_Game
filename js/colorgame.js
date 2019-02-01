var numSquare = 6;
var colors = generateRandomColors(numSquare);
	// "rgb(255, 0, 0)",
	// "rgb(255, 255, 0)",
	// "rgb(0, 255, 0)",
	// "rgb(0, 255, 255)",
	// "rgb(0, 0, 255)",
	// "rgb(255, 0, 255)"

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1")
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")


easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected")
	numSquare = 3;
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0;i < squares.length;i++ )
	{
		if (colors[i]) {
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none"
		}
	}
})

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected")
	numSquare = 6;
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0;i < squares.length;i++ )
	{
		
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		}
})
resetButton.addEventListener("click",function(){
	//generate Random colors
	colors = generateRandomColors(numSquare);
	//pick a color
	pickedColor = pickColor();
	//display color should be picked color
	colorDisplay.textContent = pickedColor;
	//Change the colors of all blocks
	for(var i = 0;i<squares.length;i++)
	{
		squares[i].style.background  = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = ""
	resetButton.textContent = "New Colors"
})
for(var i = 0; i<squares.length;i++)
{
	// Giving iniatial colors to all blocks
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click",function(){var clickedColor = this.style.backgroundColor;
	// if The clicked color eqauls to picked color
	if (clickedColor == pickedColor) {
		messageDisplay.textContent = "Correct!"
		changeColor(clickedColor)
		h1.style.backgroundColor = clickedColor;
		resetButton.textContent = "Play again?";

	}	
	// wrong selection
	else{
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again";

	}})
}
 // Changes colors of all blocks after Right Guess
function changeColor(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = color;
	}
}
// Pics random colors from colors array
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random]
}

//Generate Random colors

function generateRandomColors(num){
	// Create an empty array
	arr = [];
	//Logic to select random color
	for(var i=0;i<num;i++)
	{
		arr.push(randomColor()) 
	}
	return arr;
}

function randomColor(){

	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb" + "(" + r + ", " + g + ", " + b + ")";
}

// level.addEventListener("click",function(){
// 	for(var i=0;i<level.length;i++)
// 	{
// 		level[i].classList.toggle = "selected"
// 	}
// })


