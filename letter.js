// A constructor defining a string value to tstore the underlying character for that letter. A boolean that says whether that letter has been guessed yet. A function that returns the underlying chracter if the letter has been guessed, or a place holder "_" if it has not been guessed. Another function, which takes a acharacter as an argument, and check it against the underlying character, updating the stored boolean value to true if it was guessed correctly. 

// Constructor
var letter = function(character){

    // Stores underlying character to the construct.
this.character = character,

    //A boolean that stores whether the character has been guessed or nah. Default to nah. 
this.guessed = false,

    //A function that checks if the character has been guessed. If it has been guessed, return the character. If it has not been guessed return a placeholder. 

    this.whatToDisplay = function(){
                                if(this.guessed){
                                    return this.character.toString();
                                                }
                                else{
                                    return "_";
                                    }
                                },

                                

    // A function which takes the character as an argument, compares it to the underlying character and updates the stored boolean to true if it was guessed correctly. 

    this.guessCheck = function(x){
                                if (x === this.character){
                                    this.guessed = true;
                                                         }
                                    else{
                                        return false;
                                        }                     
                                 }
    

};

// var test = new letter("a")
// console.log(test.whatToDisplay());

// Exporting this construct to be used where required.
module.exports = letter ;