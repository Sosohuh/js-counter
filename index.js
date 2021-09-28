// document.getElementById("count").innerHTML = 5;


// 1. Create two variables, myAge and humanDogRatio 
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console
//let myAge = 21;
//let humanDogRatio = 7;
//let humanDogAge = myAge*humanDogRatio;
//console.log(humanDogAge); 

//let bonusPoints = 50; 
//bonusPoints = bonusPoints + 50; 
//console.log(bonusPoints);

//bonusPoints = bonusPoints - 75;
//console.log(bonusPoints); 

//bonusPoints = bonusPoints + 45; 
//console.log(bonusPoints);


//function A() {
//    console.log(42); 
//}
//A()

//function logOut() {
//    let lap1 = 34;
//    let lap2 = 33;
//    let lap3 = 36; 
//    console.log (lap1 + lap2 + lap3);    
//}
//logOut();

//function countdown() {
//    console.log(5)
//    console.log(4)
//    console.log(3)
//    console.log(2)
//   console.log(1)
//}
//countdown()

//countdown()

//function number() {
//    console.log(42)
//}
//number()

//let lapsCompleted = 0;
//function a() {
//    lapsCompleted = lapsCompleted + 1; 
//}
//a();
//a();
//a();
//console.log(lapsCompleted);

let number = document.getElementById('pOne');
console.log(number);

let isbalo = 0;
function submit() {
    isbalo = isbalo + 1;
    number.innerHTML = isbalo;
}

function save() {
    console.log(isbalo);
    alert ("saved!!");
}

let username = "Soso";
let message = "You have three new notifications!!";
console.log(message+", "+username);
let messageToUser = message;
console.log(messageToUser);
alert(messageToUser);