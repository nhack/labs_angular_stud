var module = (function() {
    var privateProperty = 'foo';

    function privateMethod(args) {
       console.log('privateMethod: ' + args);
    }

    return {

        publicProperty: "",

        publicMethod: function(args) {
            console.log('publicMethod: ' + args);
        },

        privilegedMethod: function(args) {
            privateMethod(args);
        },

        getPrivateProperty: function(){
            return privateProperty;
        }
    }
})(); // this is always a singleton

module.publicMethod(1);
module.privilegedMethod(2);
console.log(module.getPrivateProperty());