function findShort(s){
  const lengths = s.split(' ').map(word => { return word.length})
  return Math.min(...lengths)
}

findShort("bitcoin take over the world maybe who knows perhaps")
