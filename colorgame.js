var colors=[];
/*[
            "rgb(255, 0, 0)",
            "rgb(255, 255, 0)",
            "rgb( 0, 255, 0)",
            "rgb(255, 0, 255)",
            "rgb( 0, 255, 255)",
            "rgb( 0, 0, 255)",
            "rgb(255, 200, 110)",
            "rgb(255, 17, 70)",
           ];*/
var numSquare = 6;
var pickedColor;

var messageDisplay = document.querySelector("#message");
var squares = document.querySelectorAll(".square");
var h1=document.querySelector("h1");
var modebtn=document.querySelectorAll(".mode");
var reset = document.querySelector("#reset");
var colorDisplay=document.getElementById("colorDisplay");

colorDisplay.textContent= pickedColor;

init();

function init(){
    for(var i=0;i<modebtn.length;i++){
	modebtn[i].addEventListener("click",function(){
        modebtn[0].classList.remove("selected");
        modebtn[1].classList.remove("selected");
		this.classList.add("selected");

		this.textContent === "Easy" ? numSquare=3 : numSquare = 6;
		Doreset();
	 })
    }

    for(var i=0;i< squares.length; i++)
    {
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click",function(){
		var clickedcolor = this.style.background;
		if(clickedcolor === pickedColor){
			messageDisplay.textContent="correct!";
            changeColor(pickedColor);
            h1.style.background = pickedColor;
            reset.textContent = "Play Again?";

		}else{
			this.style.background = "#232323";
			messageDisplay.textContent= "Try Again!";
		}
	 })
    }

    Doreset();

}

function changeColor(color){
	for(var i=0;i< squares.length ; i++){
		squares[i].style.background=color;
	}
}

function pickColor(){
	var random= Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr=[];
    
    for(var i=0;i<num;i++){
        arr.push(randomColor());
    }

	return arr;
}

function randomColor(){
    
    var r=Math.floor(Math.random()*256);

    var g=Math.floor(Math.random()*256);

    var b=Math.floor(Math.random()*256);

    return "rgb("+r+", "+g+", "+b+")";
}

reset.addEventListener("click",function(){
    Doreset();	
})

 function Doreset(){
	colors = generateRandomColors(numSquare);

	pickedColor = pickColor();

	colorDisplay.textContent = pickedColor;

    for(var i=0;i<squares.length;i++){
     if(colors[i]){ 
        squares[i].style.background = "block";                           /*here colors[i] in bracket show true of there is color and false if there is not*/
       	squares[i].style.background = colors[i];
  
     }else {
       	squares[i].style.background = "none";/*none for not display when top 3 selected*/
       }
	}
	reset.textContent = "New colors";

    h1.style.background = "steelblue";
    messageDisplay.textContent = "";	

}

/*easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");

    numSquare = 3;
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){
       if(colors[i]){                           /* here colors[i] in bracket show true of there is color and false if there is not*/
     /*  	squares[i].style.background = colors[i];
  
     }else {
       	squares[i].style.background = "none";/*none for not display when top 3 selected
       }
	}
});

hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");

    numSquare =6;
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){
       	squares[i].style.background = colors[i];
       	squares[i].style.background = "block";
    }
		
});*/