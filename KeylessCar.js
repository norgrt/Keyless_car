
//added a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Used Function Declaration to create this function.
//
function checkDriverAge(){
    var age = prompt("What is your age?");
if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
}
