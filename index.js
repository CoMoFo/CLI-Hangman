// Linking the word constructor for use.
var word = require("./word.js");

// Inquirer for prompting
var inquirer = require ("inquirer");

//Random word generator
var randomWords = require('random-words');


// Pass random word through Word constructor
computerWord = new word(randomWords());
var requireNewWord = false;
// Array for guessed letters
var incorrectLetters = [];
var correctLetters = [];
// Guesses left
var guessesLeft = 10;



function knowledge() {
    // Generates new word for Word constructor if true
    if (requireNewWord) {

        // Passes random word through the Word constructor
        computerWord = new word(randomWords());
        
        requireNewWord = false;
    }
    // TestS if a letter guessed is correct
    var wordComplete = [];
    computerWord.arrayOfLetters.forEach(completeCheck);
    // letters remaining to be guessed
    if (wordComplete.includes(false)) {
        console.log(computerWord.returnDisplayString())   
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Guess a letter between A-Z!",
                    name: "userinput"
                }
            ])
            .then(function (input) {
               
                if (input.userinput.length > 1) {
                    console.log("\nPlease try again!\n");
                    knowledge();
                } else {
                   
                    if (incorrectLetters.includes(input.userinput) || correctLetters.includes(input.userinput) || input.userinput === "") {
                        console.log("\nAlready Guessed or Nothing Entered\n");
                        knowledge();
                    } else {
                        // Checks if guess is correct
                        var wordCheckArray = [];
                        
                        computerWord.guessCheckAgain(input.userinput);
                        // Checks if guess is correct
                        computerWord.arrayOfLetters.forEach(wordCheck);
                        if (wordCheckArray.join('') === wordComplete.join('')) {
                            console.log("\nIncorrect\n");

                            incorrectLetters.push(input.userinput);
                            guessesLeft--;
                        } else {
                            console.log("\nCorrect!\n");
 
                            correctLetters.push(input.userinput);
                        }
                        console.log(computerWord.returnDisplayString())
                       
                        // Print guesses left
                        console.log("Guesses Left: " + guessesLeft + "\n");
                        // Print letters guessed already
                        console.log("Letters Guessed Incorrectly: " + incorrectLetters.join(" ") + "\n");
                        // Guesses left
                        if (guessesLeft > 0) {
                            // Call function 
                            knowledge();
                        } else {
                            console.log("Sorry, you lose!\n");
                            restartGame();
                        }
                        
                        function wordCheck(key) {
                            wordCheckArray.push(key.guessed);
                        }
                    }
                }
            })
    } else {
        console.log("YOU WIN!\n");
        restartGame();
    }
   
    function completeCheck(key) {
        wordComplete.push(key.guessed);
    }
}
function restartGame() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Would you like to:",
                choices: ["Play Again", "Exit"],
                name: "restart"
            }
        ])
        .then(function (input) {
            if (input.restart === "Play Again") {
                requireNewWord = true;
                incorrectLetters = [];
                correctLetters = [];
                guessesLeft = 10;
                knowledge();
            } else {
                return
            }
        })
}
knowledge();