function anagrams(word, words) {
  return words.filter(testWord => {
    return word.split('').sort().join() === testWord.split('').sort().join()
  })
}g



anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) // => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) // => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) // => []
