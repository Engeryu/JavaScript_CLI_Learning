function morning_sunshine(numbers){

    for(var i = numbers.length; i >= 0; i--){
        if(numbers[i] >= numbers[i-1]){
            numbers.splice(i-1, 1);
        }
    }
    return numbers;
}