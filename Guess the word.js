/* 
 * Auther:Magdaleen Van Niekerk C20300.
 */
/* global words, math, maxtime, wordArry, checkWord, refresh, word, check */

const words =[
{
    word:"candle",
    hint:"Hint:  I'm tall when I'm young and short when I'm old. What am I ?"
}, 
{
    word:"Future",
    hint:"Hint: What is always in front of you but cn't be seen ?"
}, {
    word:"promise",
    hint:"Hint: what can you brak, even if you never pick it up or touch it ?"
}, {
    word:"towel",
    hint:"Hint: What gets wet while drying ?"
}, {
    word:"barber",
    hint:"Hint: I shave every day, but my beard stays the same. What am I ?"
}, {
    word:"bank",
    hint:"Hint: I have branches, but no fruit, trunk or leaves. What am I ?"
}, {
    word:"echo",
    hint:"Hint: what can't talk but will reply when spoken to ?"
}, {
    word:"Darkness",
    hint:"Hint: The more of this there is,the less you see. What am I ?"
}, {
    word:"tongue",
    hint:"Hint: What tastes better than it smells ?"
}, {
    word:"library",
    hint:"Hint: What building has the most stories ?"
}, {
    word:"dictionary",
    hint:"Hint: where is the only place where today comes before yesterday ?"
}, {
    word:"relationship",
    hint:"Hint: What kind of ship has two mates but no captain ?"
}, {
    word:"incorrectly",
    hint:"Hint: Which word in the dictonary is spelled incorrectly ?"
}, {
    word:"trouble",
    hint:"Hint: What is easy to get into but hard to get out of ?"
}, {
    word:"money",
    hint:"Hint: People make me, save me, change me,rais me. What am I ?"
}, {
    word:"battery",
    hint:"Hint: I have no life,but I can die. What am I ?"
}, {
    word:"envelope",
    hint:"Hint: What begins with an E but only has one letter in it ?"
}, {
    word:"mushroom",
    hint:"Hint: What room doesn't have any windows ?"
}, {
    word:"babysitter",
    hint:"Hint: What cruel person would sit on a baby ?"
}, {
    word:"refrigerator",
    hint:"Hint: I am always running, but never get tited or hot. What am I ?"
}
];

var correctWord, time, userWord;

const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector(".input"),
refresh = document.querySelector(".refresh-word"),
check = document.querySelector(".check-word");

const initTimer = maxTime => {
     clearInterval(time);
    time = setInterval(() => {
        if(maxTime > 0){
            maxTime--; //decrement maxTime by -1
         return timeText.innerText = maxTime;  
        }
        clearInterval(time);
        alert("Time is up! the correct word is " + correctWord);
        initeGame(); //calling initeGame function, so the game restart
    }, 1000);
};

const initGame = () => {
   initTimer(30); //calling initTimer function with passing 30 as maxTime value
   var randomObj = words[Math.floor(Math.random() * words.length)]; //getting random obects from words
   var wordArray = randomObj.word.split(""); //splitting each letter of random word
   for (var i = wordArray.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * (i + 1)); //getting random number
       //shuffeling and swiping wordArray letters randomly
       [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
   }
   wordText.innerText = wordArray.join(""); //passing shuffeled word as word text
   hintText.innerText = randomObj.hint; //passing shuffeled word as word text
   correctWord = randomObj.word.toLocaleLowerCase(); //passing random word to correct word
   inputField.value = "";
   inputField.setAttribute("maxlength", correctWord.length); //setting imput maxlength after value to word length
   console.log(randomObj);
 };
 
initGame();

const checkWord = () => {
    var userWord = inputField.value.toLocaleLowerCase(); // getting user value
    if(!userWord) return alert("Pleas enter a word check"); //if user didn't enter anything
    
    //if user word doesen't match with the correct word
    if(userWord !== correctWord) return alert("Oops!" + correctWord + " is not the correct word");
    
    //if above two conditions are failed then show congrats alert because user word is correct
    alert("Congrats!" + correctWord + " is the correct word");
    initGame();
};

refresh.addEventListener("click", initGame);
check.addEventListener("click", checkWord);

