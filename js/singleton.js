var singletonItem = (function(){
    var instance;
    
    function init(){
        var privateProtperty = "Private Property";
        function privateMethod(){
            console.log("this is private method");
        }
        
        return {
            publicProperty: "Public Property",
            publicMethod: function(){
                console.log("this is Public method");
            }
        }
    }
    
    return {
        getInstance: function(){ // get only instance of this singletonItem
            if(!instance){
                instance = init();
            }
            
            return instance;
        }
    }
})();