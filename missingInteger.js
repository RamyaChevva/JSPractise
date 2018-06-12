var a = [1,4,7], count = a[a.length - 1];

	var missing = [];

	for ( var i = 1; i <= count; i++ ) {
  
		if (a.indexOf(i) == -1) {
  
		 	missing.push(i);
  
		}
	
}

	console.log("Missing Integers are: "+missing.toString());