let score = 33

console.log(typeof(score))

let convertInChar = String(score)
console.log(convertInChar);             //This will return same value i.e 33

let newScore = "33"
let valueInNumber = Number(newScore)
console.log(typeof(valueInNumber));     // This will convert string into number

let latestScore = "33frm"
console.log(typeof(latestScore));
let conertInNumber = Number(latestScore)
console.log(conertInNumber);                // this will return Not a Number NAN.

let updateScore = null
let conertInNumber1 = Number(updateScore)
console.log(conertInNumber1);               //This will return 0.

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof(booleanIsLoggedIn));         //type is boolean
console.log(booleanIsLoggedIn);                 //It will print true.
