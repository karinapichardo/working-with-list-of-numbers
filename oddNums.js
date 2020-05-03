/* Create a function which returns the total of all odd numbers up to and including n. n will be given as an odd number. */

	function addOddToN(n) {
	    if (n % 2 === 1) {
            n++;
  } 
  return n * n / 4;
}

// testing our function by calling it 
console.log(addOddToN(5)) // --> 9
console.log(addOddToN(13)) // --> 49
console.log(addOddToN(47)) // --> 576
console.log(addOddToN(31)) // --> 256