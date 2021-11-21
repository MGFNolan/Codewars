// Return an array
function fizzbuzz(n) {
    //array for the answer
    let arr = []
    
    //start i as 1 as requested, until it is less or equal to input
    //and then increase by 1 per iteration. Check for both Fizz & Buzz first
    //as it will stop going through the if statement as soon
    //as it finds a match to the conditions.
    
    for(i=1; i<=n; i++) {
      if(i % 3 == 0 && i % 5 == 0) {
        arr.push("FizzBuzz");
      } else if(i % 3 == 0) {
        arr.push("Fizz");
      } else if (i % 5 == 0) {
        arr.push("Buzz");
      } else {
        arr.push(i);
      }
    }
    return arr;
  }

  module.exports = fizzbuzz;