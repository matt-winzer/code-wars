

function goodVsEvil(good, evil){
  good = good.split(' ').reduce((val, race, i) => {
    switch (i) {
      case 0:
        return val + (race * 1)
        break;
      case 1:
        return val + (race * 2)
        break;
      case 2:
        return val + (race * 3)
        break;
      case 3:
        return val + (race * 3)
        break;
      case 4:
        return val + (race * 4)
        break;
      case 5:
        return val + (race * 10)
        break;
      default:
        return val
    }
  }, 0)

  evil = evil.split(' ').reduce((val, race, i) => {
    switch (i) {
      case 0:
        return val + (race * 1)
        break;
      case 1:
        return val + (race * 2)
        break;
      case 2:
        return val + (race * 2)
        break;
      case 3:
        return val + (race * 2)
        break;
      case 4:
        return val + (race * 3)
        break;
      case 5:
        return val + (race * 5)
        break;
      case 6:
        return val + (race * 10)
        break;
      default:
        return val
    }
  }, 0)

  if (good > evil) {
    return 'Battle Result: Good triumphs over Evil'
  } else if (evil > good){
    return 'Battle Result: Evil eradicates all trace of Good'
  } else {
    return 'Battle Result: No victor on this battle field'
  }
}

// Better solution

// function goodVsEvil(good, evil) {
//   var getWorth = function( side, worth ) {
//     return side.split(' ').reduce( function(result, value, index) {
//       return result + (worth[index] * value);
//     }, 0);
//   }
//
//   var result = getWorth( good, [1,2,3,3,4,10] ) - getWorth( evil, [1,2,2,2,3,5,10] );
//
//   return result > 0 ? "Battle Result: Good triumphs over Evil" :
//          result < 0 ? "Battle Result: Evil eradicates all trace of Good" :
//                       "Battle Result: No victor on this battle field";
// }

goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1') // 'Battle Result: Evil eradicates all trace of Good', 'Evil should win' );
goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0') // 'Battle Result: Good triumphs over Evil', 'Good should win' );
goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0') // 'Battle Result: No victor on this battle field', 'Should be a tie' );
