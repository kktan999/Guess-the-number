    var randomNumber = Math.round(Math.random()*100)
    var numberOfGuesses = 5;
function myFunction(){

	var guess = document.getElementById("guess").value
	var clue = document.getElementById("clue")
	numberOfGuesses --;
	console.log(guess)
	console.log(randomNumber)
	console.log(numberOfGuesses)
	if (guess == randomNumber){
		clue.innerHTML = "You win." +numberOfGuesses+ "guesses remaining";
	}
	else if (guess > randomNumber){
		clue.innerHTML = "Too big." +numberOfGuesses+ "guesses remaining";
	}
	else {
		clue.innerHTML = "Too small." +numberOfGuesses+ "guesses remaining";
	}
	


}
