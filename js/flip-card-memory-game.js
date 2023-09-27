/* Create a class called Card with 2 properties.
setNumber: Number used to check if 2 cards belongs to the same set.
url: Literal path of an online image. */
class Card {
    //Constructor used to define an object of the Card class
    constructor(setNumber, url) {
        this.setNumber = setNumber;
        this.url = url;
    }
    
    //This function return the Object's value of the property setNumber.
    //Will be used to check if 2 cards are from the same set.
    setNumberValue() {
        return this.setNumber;
    }
}

//GLOBAL VARIABLES
const CARDS = []; //Create an array to store all the cards created, so we can use index of array to access individual card information
const CARD_SELECTED = []; //Array used to log player card picked
const SETS_FOUND = []; //Array used to keep track of card set found by player
const NUM_TRIES =[]; //Array used to keep track of player attempts
const SCORE = 0; //Variable keeping track of player's score
let timerInterval; //Every second it refreseshes time that has elapsed
let startTime; //The time at which the timer starts
let elapsedTime = 0; //Start elapsed time

//first set of cards
const card1 = new Card(1, "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");
CARDS.push(card1); // add card to library of cards
const card2 = new Card(1, "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");
CARDS.push(card2);// add card to library of cards

//Second set of cards
const card3 = new Card(2, "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1942&q=80");
CARDS.push(card3); // add card to library of cards
const card4 = new Card(2, "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1942&q=80");
CARDS.push(card4); // add card to library of cards

//third set of cards
const card5 = new Card(3, "https://images.unsplash.com/photo-1596708803699-587668036834?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80");
CARDS.push(card5); // add card to library of cards
const card6 = new Card(3, "https://images.unsplash.com/photo-1596708803699-587668036834?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80");
CARDS.push(card6); // add card to library of cards

//example of how to check a card setNumber.
console.log(`Card 1 set is ${card1.setNumberValue()}.`);

//Adding onclick events to each div card 
for(i = 0; i < 6; i++) {
    let elementID = document.getElementById(i).id;
    document.getElementById(i).addEventListener('click', function () { startStopwatch(); });
    document.getElementById(i).addEventListener('click', function () { showCard(elementID); });
    console.log(elementID);
}

//stopwatch functions
function updateTimerDisplay() {
	const timerElement = document.getElementById('timer');
	const currentTime = new Date().getTime();
	const timeDifference = new Date (currentTime - startTime + elapsedTime);
	const minutes = timeDifference.getMinutes();
	const seconds = timeDifference.getSeconds();
    const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
	document.getElementById('timer').textContent = 'Stopwatch: ' + formattedTime;
}

//starts stopwatch
function startStopwatch() {
    if (!timerInterval) {
        startTime = new Date().getTime();
        timerInterval = setInterval(updateTimerDisplay, 1000);
    }
}
//startStopwatch();


//function to display card's picture
function showCard(id){
    //change div.style to show card's picture
    //display picture with the same array index than the id parameter
    //e.g div number 5 will show the picture of the card store at the index number 5 of the array cards
    let el = document.getElementById(id);
    el.style.backgroundImage = `url('${CARDS[id].url}')`;
    el.style.backgroundSize = 'cover';  
}