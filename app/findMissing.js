//findMissing(arr1, arr2) finds missing number in both arrays, and returns it

module.exports = {
  findMissing : function(arr1, arr2) {
    for(var i = 0; i < arr2.length; i++ ) {
	  if(arr1.indexOf(arr2[i]) === -1) 
	    return arr2[i];
	} 
	for(var i = 0; i < arr1.length; i++ ) {
	  if(arr2.indexOf(arr1[i]) === -1) 
	    return arr1[i];
	}  
	return 0;
	}
}