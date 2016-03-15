
function loop(arr, fn){
	if(Array.isArray(arr) == true && typeof fn === 'function'){
		for(var i = 0; i < arr.length; i++){
			fn.call(arr, arr[i], i);
		}
	}
	else return
}

domElements = {
	find : function(elem) {
		this.add(document.getElementById(elem));
	},
	add : function(elem){
		Array.prototype.push.call(this, elem);
	},
	length: 0
};

function maxVal(arr){
	return Math.max.apply(Math, arr);
}

function mergeObject(obj){
	for(var i = 1; i < arguments.length; i++){
		for(var key in arguments[i]){
			root[key] = arguments[i][key];
		}
	}
	return root;
} 


function printFirstArg(arg) {
	for(var i = 0; i<arguments.length; i++){
		
	}
	return arg;
}


function arg(a,b,c) {
	return arguments.length;
}


function addMethod(object, name, fn) {
	var old = object[name];
//	console.log(old);
	object[name] = function(){
		if(fn.length == arguments.length){
			console.log("in if - function found");
			return fn.apply(this, arguments);
		}
		else if (typeof old === 'function'){
			console.log("in else if - function not found");
			return old.apply(this, arguments);			
		}
	};
}

function People() {
	var people = ["Cost Morf", "Alex Ant", "Sot Pap"];

	addMethod(this, "find", function(){
		return people;
	});

	addMethod(this, "find", function(name){
		var res = [];
		for(var i =0; i<people.length ; i++){
			if( people[i].indexOf(name) == 0){
				res.push(people[i]);
			}
		}
		return res;
	});

	addMethod(this, "find", function(name, surname){
		var res = [];
		for(var i =0; i<people.length ; i++){
			if( people[i] === (name + " " + surname) ){
				res.push(people[i]);
			}
		}
		return res;
	});
}


/* 
 * to check if an object is a function usually the typeof check will suffice with the exception of a
 * few older browsers. 
 * An alternative choice is to use the following:
 */

 function isFunction(fn) {
 	return Object.prototype.toString.call(fn) === "[object Function]";
 } 



