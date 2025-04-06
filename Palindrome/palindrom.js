/**
 * @Author: Engeryu
 * @Date:   2018-09-13 08:18:13
 * @Last Modified by:   Engeryu
 * @Last Modified time: 2025-04-06 22:35:58
 */
function palindrome(str) {
    var re = /[\W_]/g;
    
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
  }