// Pseudo Code and Wireframes: Build a simple slot machine with minimum 5 items per reel and 3 reels
// - user should be able to bet min or max and have their total update aka how much money they have won or lost.
// Min bet does $5 and Max bet does $50. They should start with $1000.
// Matches of the three wheels = a win just like a normal slot machine and they win 10x their bet
let money = 1000
// - user should be able to bet min or max -and have their total update aka how much money they have won or lost.
document.querySelector("#moneyLabel").innerHTML = money


// Pseudo Code and Wireframes: Build a simple slot machine with minimum 5 items per reel and 3 reels
document.querySelector("#play").addEventListener("click",function (){
  let arg1 = document.querySelector("#betInput").value
  //verify if bet is between 5$ --- 50$
  // short money -= bet
  // document.querySelector("#moneyLabel").innerHTML = money

  // Verify that if user has less than 5$ then game wont work
  let randomImages = ["A", "B", "C", "D", "E"];
  // let randomImages = ["Apple.jpg", "Banana.jpg", "Carrot.jpg", "D", "E"];
  let machine = randomImages[Math.floor(Math.random()*randomImages.length)];
  // document.querySelector("#img1").src = machine;
   document.querySelector("#box1").innerHTML = machine
  //Refrencing the LET variable
    machine = randomImages[Math.floor(Math.random()*randomImages.length)];
    document.querySelector("#box2").innerHTML = machine

   machine = randomImages[Math.floor(Math.random()*randomImages.length)];
   document.querySelector("#box3").innerHTML = machine

checkWin(arg1);
   // if the player wins add 10X bet to #moneyLabel
    //  if #box1 #box2 #box3 match then its a winner
  //  else : loser
});

function checkWin(bet){
console.log(document.querySelector("#box3").innerHTML);
console.log(document.querySelector("#box2").innerHTML);
console.log(document.querySelector("#box1").innerHTML);

let betNum = parseInt(bet)

let box1 = document.querySelector("#box1").innerHTML;
let box2 = document.querySelector("#box2").innerHTML;
let box3 = document.querySelector("#box3").innerHTML;
console.log( box1, box2, box3);
if (box1 === box2 && box1 === box3){
  money +=  betNum * 10
alert("Congratulations! You have Won");
  console.log(money);
}else {
  console.log("loss")
  money = money - betNum
  console.log(money);

}
document.querySelector("#moneyLabel").innerHTML = money
if (money <= 5){

  alert("Not Enough Funds")
}


}


// stop going into neg number
// add reward



/*********************Set alert "you have won" to the screen CODE below*************/
// if (reel1 == reel2 && reel1 == reel3)
//     alert("You've won");
//  var balance = 1000
// Random Letter appears

// let machine = randomImages[Math.floor(Math.random()*randomImages.length)];
// document.body.innerHTML = machine
//
// let machine = randomImages[Math.floor(Math.random()*randomImages.length)];
// document.body.innerHTML = machine

// let randomImages = ["A", "B", "C", "D", "E"];
// let machine = randomImages[Math.floor(Math.random()*randomImages.length)];
// document.body.innerHTML = machine
//
// let randomImages = ["A", "B", "C", "D", "E"];
// let machine = randomImages[Math.floor(Math.random()*randomImages.length)];
// document.body.innerHTML = machine

// let machine = randomImages[Math.floor(Math.random()*randomImages.length)];
// document.body.innerHTML = machine;
//
// let randomImages = ["A", "B", "C", "D", "E"];
// let machine = randomImages[Math.floor(Math.random()*randomImages.length)];
// document.body.innerHTML = machine;
//
// // document.addEventListener("click", () =>)
//
// // event.preventDefault()

// calvin
//use a var
// use an array to collect the id's or elements
//variable name such as 'banana, apple, pear'
// use random item to randomize?
//create items add rotate()
//

// create items in html
//targetquery.selector
