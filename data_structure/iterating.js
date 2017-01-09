var numbers = [1, 5, 7, 14,29,137,91,34,11,22,48];

function isEven(value){  // 是偶数
    return value % 2 == 0;
}

console.log("forEach()");
numbers.forEach(function(x){
    console.log( x % 2 == 0 );
});

var mapEvenNums = numbers.map(isEven); 
var filterEvenNums = numbers.filter(isEven);

console.log("map()");
console.log(mapEvenNums);
mapEvenNums.forEach(function(x, i){
    console.log(numbers[i] + (x % 2 ?" is Even ":" is Odd"));
});


console.log("filter()");
console.log(filterEvenNums);