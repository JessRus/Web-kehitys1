// Exercise 1 – Developer Tools and Console
console.log("Hello, World!");
alert("Hello! Welcome to my Website!")

// STEP 2: Variables
// Store text values in variables
const userName = "Jessica";
let age = 21;
const favoriteAnimal = "Kissa";
console.log("My name is " + userName);
console.log("My favorite animal is " + favoriteAnimal);


// Exercise 3 – User Input
const visitorName = prompt("What is your name");
console.log(visitorName);
console.log("Hello, " + visitorName + "! Tervetuloa javaScriptin pariin");

// Exercise 3 – User Input
const visitorFavoriteAnimal = prompt("mikä on lempieläimesi");
console.log("Hello, " + visitorName + "! Your favorite animal is " + visitorFavoriteAnimal + ".")

// Exercise 4 – Conditionals
const FavoriteAnimal = prompt("mikä on lempieläimesi");
if (FavoriteAnimal === "Blue Elephant") 
    { console.log("Great choice! That's my favorite animal too!"); } 
    else { console.log("Nice! Your favorite animal is " + FavoriteAnimal + "."); }

// Exercise 4 – Conditionals
const userAge = prompt("Kuinka vanha olet?");
if (userAge >= 18) 
    { console.log("You are an adult."); } 
    else { console.log("You are under 18."); }

// Exercise 5 – Functions
function greetUser(name) { console.log("Hello " + name + "!"); }
greetUser("Ismo");

// Exercise 6 – Button – Connect JavaScript to the Page
function showMessage() 
{alert("Katoppa se toimii");}
