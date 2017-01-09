// Create stack
function Stack(){
    let items = [];
    this.push = function(item){
      items.push(item);  
    };
    
    this.pushAll = function(){
        var args = Array.prototype.slice.call(arguments);
        for(var i in args){
            items.push(args[i]); 
        } 
    };
    
    this.pop = function(){
        return items.pop();
    };
    
    this.peek = function(){
        return items[items.length - 1];
    }
    
    this.isEmpty = function(){
        //return items.length ? true : false;
        return items.length === 0;
    }
    
    this.size = function(){
        return items.length === 0;
    }
    
    this.clear = function(){
        items.length = 0;
    }
    
    this.print = function(){
        console.log(items.toString());
    }
}
// Stack method(): push() / pop() / peek(): return top element from stack / isEmpty() / clear() / size()

let stack = new Stack();
