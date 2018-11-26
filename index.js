// Linking the word constructor for use.
var word = require("./word.js");

// Inquirer for prompting
var inquirer = require ("inquirer");

//Random word generator
var randomWords = require('random-words');

// Initialize a new game
// Makes a guess
// Check if guess is good
        // Do this by creating an array of all the 'guessed' booleans for each letter of the word. if that array.includes(false) then there are letters remaining to be guessed. 
        
        // If the guess is bad then the displayed string will be the same. 



//   * Randomly selects a word and uses the `Word` constructor to store it  

var wordGen = function(){
    var guessThis = new word(randomWords());
        return guessThis
                        };

// * Prompts the user for each guess and keeps track of the user's remaining guesses
let remainingGuesses = 10

var makeGuess = function(){
inquirer 
        .prompt([
                        {
                            name: "letterGuessed",
                            message: "\n Pick a letter any letter "
                                    + "\n Guesses remaining: " + remainingGuesses
                        }
                    
        ]).then(function(response){
                
        })
                            } //End makeGuess

// Command for showing how many letters remain to be guessed.
// console.log(wordGen().returnDisplayString())

makeGuess();

// var test = new word("giver");
// console.log("testing: ", test)