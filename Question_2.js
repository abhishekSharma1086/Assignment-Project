var array = [0, 0, 1, 1, 0, 1, 1, 1, 0, 0];
var result = 0;
var sum = 0;
for(var i = 0; i <= array.length; i++){
    if(array[i] == 1){
        return sum++;
    }
    if(sum > result){
        return result = sum;
    }
}
console.log(result);