// A constructor that depends on the letter constructor. It defines an array of 'new letter' objects representing the letters of the underlying word. A function that returns a string representing the word, it should call the function on each letter object (.whatToDisplay) then displays that character or an underscore and concatenate those togethor. Also a function that takes a character as an aargument and calls the (guessCheck) function on each letter object. 

// Linking the letter constructor for use.
var letter = require("./letter.js");

var word = function(givenWord){

    // The word
    this.givenWord = givenWord;

    // An array of (= new letter) objects, each representing the letters of the underlying word.
    this.arrayOfLetters = [];
    
    // Populating the array of letters
    let wordArr = this.givenWord.split("");
    for (let i = 0; i < wordArr.length; i++) {
        let element = wordArr[i];
            let newLetterObject = new letter(element.toString());
                this.arrayOfLetters.push(newLetterObject);
        
                                             }
                
    // A function returning a display of the array.
    this.returnDisplayString = function(){
        displayArray = [];
        for (let n = 0; n < this.arrayOfLetters.length; n++) {
            let elemen = this.arrayOfLetters[n].whatToDisplay();
                displayArray.push(elemen);
                                                             }
        
        return displayArray.join(' ');
                                         };


    //A function that takes a character as an aargument and calls the (guessCheck) function on each letter object. 
    this.guessCheckAgain = function(character){
        for (let d = 0; d < this.arrayOfLetters.length; d++){
            let elem = this.arrayOfLetters[d].guessCheck(character);
            
            return elem;
                                                   }
                                              };


};

// var test = new word("giver");
// console.log("testing: ", test.guessCheckAgain());
module.exports = word ;