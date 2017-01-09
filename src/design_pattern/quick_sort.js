Array.prototype.quick_sort = function(){
    // Stop condition
    if(this.length <= 1)
        return this.slice(0);
    // Pivot
    var pivotIndex = Math.floor(this.length / 2);
    var left = [], right = [], final = [];
    
    for(var i = 0 ; i < this.length ; i++){
        if(this[i] < this[pivotIndex]){
            left.push(this[i]);
        }else{
            right.push(this[i]);
        }
    }
    
    return left.quick_sort().concat(this[pivotIndex].concat(right.quick_sort()));
};

Array.prototype.quick_sort_inplace = function(){
    
    // 
    var partition = function(array, left, right){
        var pivotIndex = Math.floor(left + right / 2);
        var i = left, j = right；
        
        while(i <= j){
            while(array[i] < array[pivotIndex]){  i++;  }
            while(array[j] > array[pivotIndex]){  j--;  }
            if(i <= j){
                swap(array, i, j);
                i++;
                j--;
            }
        }
        return i;
    }
    
    // iterate
    var quick = function(array, left, right){
        var index;
        if(array.length > 1){
            index = partition(array, left, right);
            
            if(left < index - 1){
                quick(array, left, index - 1);
            }
            
            if(right > index){
                quick(array, index, right);
            }
        }
    }
    
    quick(this, 0, this.length - 1);
}