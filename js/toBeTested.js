

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
	}
}


