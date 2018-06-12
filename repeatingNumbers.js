function getDistinctArray(arr) {
    var dups = {};
    return arr.filter(function(el) {
        var hash = el.valueOf();
        var isDup = dups[hash];
        dups[hash] = true;
        return !isDup;
    });
}
//getDistinctArray(20, 59, 20, 48, 29, 29, 59, 30);


function compressArray(original) {
 
  var compressed = [];
  // make a copy of the input array
  var copy = original.slice(0);
 
  // first loop goes over every element
  for (var i = 0; i < original.length; i++) {
 
    var myCount = 0;  
    // loop over every element in the copy and see if it's the same
    for (var w = 0; w < copy.length; w++) {
      if (original[i] == copy[w]) {
        // increase amount of times duplicate is found
        myCount++;
        // sets item to undefined
        delete copy[w];
      }
    }
 
    if (myCount > 0) {
      var a = new Object();
      a.value = original[i];
      a.count = myCount;
      compressed.push(a);
    }
  }
 
  return console.log(compressed);
};
