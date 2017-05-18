

exports.pushOrRemove = function(array, elem) {
	//Try to find the elem into the array
	var index = array.indexOf(elem);
	//If exists remove it 
	if (index >= 0) {
		array.splice(index, 1);
	}
	else {
		array.push(elem);
	}
	
	return array;
}

exports.sortByDate = function(a, b) {
	return new Date(b.value.date) - new Date(a.value.date);
}
