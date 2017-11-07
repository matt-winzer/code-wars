function findMissingLetter(array) {
  for (var i = 0; i < array.length - 1; i++) {
    let currentCode = array[i].charCodeAt(0)
    let nextCode = array[i + 1].charCodeAt(0)

    if (nextCode - currentCode !== 1) {
      return String.fromCharCode(currentCode + 1)
    }
  }
}

findMissingLetter(['a','b','c','d','f']) // ====> 'e'
findMissingLetter(['O','Q','R','S']) // ====> 'P')
