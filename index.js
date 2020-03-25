var gameColor=["red","green","yellow","blue"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var start=false;


$(document).keypress(function(){

	if(!start){
$("#level-title").text("level "+level);
nextSequence();
start=true;

}
});


$(".btn").click(function(){

var userChosenColor=$(this).attr("id");
userClickedPattern.push(userChosenColor);
playSound(userChosenColor);
animatePress(userChosenColor);

checkAnswer(userClickedPattern.length-1);

});

function checkAnswer(currentlevel){
if(userClickedPattern[currentlevel]===gamePattern[currentlevel]){


	

	if (userClickedPattern.length===gamePattern.length) {


		setTimeout(function(){
			nextSequence();

		},1000);

	}

		}
		else {

		     
		     playSound("wrong");
            $("body").addClass("game-over");
			setTimeout(function(){
				
				$("body").removeClass("game-over");

			},1000);


      $("#level-title").text("Game Over Press any key to restart");

      restart();

      }
    

}





function nextSequence(){
userClickedPattern=[];
level++;
$("#level-title").text("level "+level);
var randomNumber=Math.floor(Math.random()*4);
var randomChosenColor=gameColor[randomNumber];

$("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
gamePattern.push(randomChosenColor);
playSound(randomChosenColor);


}


function playSound(name){

  var audio=new Audio("sounds/"+name+".mp3");
  audio.play();
}

function animatePress(currentcolor){

$("#"+currentcolor).addClass("pressed");
setTimeout(function(){
$("#"+currentcolor).removeClass("pressed");
},100);

}

function restart(){

start=false;
level=0;
gamePattern=[];

}

