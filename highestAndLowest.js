// highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6") >> "542 -214"

function highAndLow(numbers){
  return Math.max.apply(null, numbers.split(' ')) + ' ' + Math.min.apply(null, numbers.split(' '))
}


highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
