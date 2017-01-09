var array = [];

(function(){
    var i = 0;
    
    for(i; i < 3; i++){
        array.push(function(){
           return i++; 
        });
    }
    
    console.log(array[0]());
    console.log(array[1]());
    console.log(array[2]());
    console.log(array[3]());
})();

// 3
// 4
// 5
// Uncaught TypeError: array[3] is not a function(…)