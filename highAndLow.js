console.log(highAndLow("1 2 3 4 5"));  // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"

function highAndLow(numbers){
    var num1 = [];
    for (i=0; i < numbers.split(" ").length; i++) {
        num1[i] = Number(numbers.split(" ")[i]);
    }
    return "" + Math.max(...num1) + " " + Math.min(...num1);
  }