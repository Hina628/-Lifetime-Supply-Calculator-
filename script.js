
var favorite_Snack = prompt("Enter your favorite snack:");
var current_age = prompt("Enter your current age:");
var maximum_Age = prompt("Enter your maximum estimated age:");
var parDay_Snacks = prompt("How many snacks do you eat per day?");


current_age = parseInt(current_age);
maximum_Age = parseInt(maximum_Age);
parDay_Snacks = parseInt(parDay_Snacks);

var total_Chocolate = (maximum_Age - current_age) * 365 * parDay_Snacks;


document.getElementById("snack").textContent = favorite_Snack;
document.getElementById("current-age").textContent = current_age;
document.getElementById("max-age").textContent = maximum_Age;
document.getElementById("snacks-per-day").textContent = parDay_Snacks;
document.getElementById("total-snacks").textContent = total_Chocolate;
document.getElementById("max-age-2").textContent = maximum_Age;
