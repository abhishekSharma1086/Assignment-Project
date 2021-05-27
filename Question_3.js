var arr =[1, 2, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10];
var result= [];
for(var i= 0; i<= arr.length; i++){
    for(var j= 1; j <= arr.length; j++){
        if(arr[i] == arr[j]){
            result.push(arr[j]);
        }
    }
}
console.log(result);