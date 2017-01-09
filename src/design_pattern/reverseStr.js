var reverse = function(str){
    var strs = str.split("");
    var len = strs.length,
        midInx = Math.floor(len/2) - 1,
        revstr;
    
    for( var i = 0; i < midInx; i++){
        revstr = strs[len-i-1];
        strs[len-i-1] = strs[i];
        strs[i] = revstr;
    }
    
    return strs.join("");
}

var reverse_recursion = function(str){
    // stop
    if(str.length <= 1)
        return str;
    
    return reverse_recursion(str.subtr(1)) + str.charAt(0);
}