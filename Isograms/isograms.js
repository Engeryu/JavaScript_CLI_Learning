/**
 * @Author: Engeryu
 * @Date:   2018-09-13 08:12:52
 * @Last Modified by:   Engeryu
 * @Last Modified time: 2025-04-06 22:35:59
 */
var dupli_or_not = 'hello';

var charRepeats = function(str) {
    for (var i=0; i<str.length; i++) {
      if ( str.indexOf(str[i]) !== str.lastIndexOf(str[i]) ) {
        return true;
      }
    }
  return false;
}