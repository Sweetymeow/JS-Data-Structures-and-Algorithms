var fibonacci = function(n){
    var fib = [0,1];
    if(n < 2) return 1;
    
    for(var i = 2; i <= n; i++){
        fib.push(fib[n-1] + fib[n-2]);
    }
    
    return fib[n];
}

console.log(fibonacci(15));


var fib_recursion = function(n){
    if(n < 2) return n;
    
    return fib_recursion(n-1) + fib_recursion(n-2);
}