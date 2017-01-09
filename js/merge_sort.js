// recursion
Array.prototype.merge_sort = function (){
    var len = this.length;
    
    // stop 
    if(len < 2){
        return this.slice(0);
    }
    
    var merge = function(left, right){
        var final = [];
        while(left.length && right.length){
            final.push( left[0] >= right[0] ? right.shift() : left.shift());
        }
        return final.concat(left.concat(right));
    }
    
    var mid = Math.floor(len/2);
    
    return merge(this.slice(0, mid).merge_sort(), this.slice(mid).merge_sort());
    
}

// T(n) = O(n log n), S(n) = O(n)