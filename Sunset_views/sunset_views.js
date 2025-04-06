/**
 * @Author: Engeryu
 * @Date:   2018-09-14 08:00:34
 * @Last Modified by:   Engeryu
 * @Last Modified time: 2025-04-06 22:42:22
 */
function sunset_views(numbers){

    for(var i = numbers.length; i >= 0; i--){
        if(numbers[i] >= numbers[i-1]){
            numbers.splice(i-1, 1);
        }
    }
    return numbers;
}