var array = [4, 44, 71, 3, 85, 8, 92, 102];
// console.log(array);
var result = [];
for(var i = 0; i <= array.length; i++){
    if(array[i] % 2 == 0){
        result.push(array[i]);
    }
}
console.log(result);