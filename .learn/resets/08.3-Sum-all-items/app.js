function sumTheElements(theArray) {
	let total = 0;
	// Your code here
	for(const i in theArray){
		total += theArray[i];
	}

	return total;
}
