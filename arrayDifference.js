// array_diff([1,2,2,2,3],[2]) == [1,3]

function array_diff(a, b) {
  return a.filter(num => { return num != b })
}


console.log(array_diff([1,2,2,2,3],[2]))
