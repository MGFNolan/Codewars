function lovefunc(flower1, flower2){
    //Check if either both have a remainder, or one has a remainder
    if ((flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0)) {
      return true;
    } else {
      return false;
    }
  }

  module.exports = lovefunc;