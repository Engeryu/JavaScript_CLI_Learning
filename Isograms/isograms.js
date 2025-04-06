var dupli_or_not = 'hello';

var charRepeats = function(str) {
    for (var i=0; i<str.length; i++) {
      if ( str.indexOf(str[i]) !== str.lastIndexOf(str[i]) ) {
        return true;
      }
    }
  return false;
}