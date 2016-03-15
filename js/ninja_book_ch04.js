/* CLOSURES
 * A closure is a way to access and manipulate external variables from within a function.
 * A function is able to access all the variables & function declared
 */

function add2(a, b){
	return a+b;
}

var elem = document.getElementById("box");
var counter = 0;

/*
var timer = setInterval(function() {
	if (counter < 100 ) {
		elem.style.left = counter + "px";
	} else {
		clearInterval(timer);
		return counter;
	}
}, 10);
*/