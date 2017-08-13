var jewelArray = [];

var wins = 0;
var losses = 0;

var depth = 0;
var cummUserGuess = 0;

function guessThatNumber(result) {
	var randomNumber=Math.floor(Math.random()*101+18);
	console.log(randomNumber);
	$('#crystalDepth').html(randomNumber);
	depth = randomNumber;

	for (var i=0 ; i <= 3; i++) {
		var randomJewelNumber=Math.floor(Math.random()*11)+2;
		// purposefully don't want a value of 1
		jewelArray.push(randomJewelNumber);
	};
}

guessThatNumber();

console.log(jewelArray);
console.log(depth);

$('#jewel-1').click(function() {
	cummUserGuess = jewelArray[0] + cummUserGuess;
	$('#cummulativeGuess').html(cummUserGuess);
});

$('#jewel-2').click(function() {
	cummUserGuess = jewelArray[1] + cummUserGuess;
	$('#cummulativeGuess').html(cummUserGuess);
});

$('#jewel-3').click(function() {
	cummUserGuess = jewelArray[2] + cummUserGuess;
	$('#cummulativeGuess').html(cummUserGuess);
});

$('#jewel-4').click(function() {
	cummUserGuess = jewelArray[3] + cummUserGuess;
	$('#cummulativeGuess').html(cummUserGuess);
});

if (cummUserGuess===depth){
	alert("CRYSTAL FOUND!");
	wins++;
	cummUserGuess=0;
	guessThatNumber();
} else if (cummUserGuess>depth){
	alert('Depth overshot!  Crystal broken!  Try again');
	losses++;
	cummUserGuess=0;
	guessThatNumber();
};
