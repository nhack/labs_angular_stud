var module = (function() {
    var privateProperty = 'foo';

    function privateMethod(args) {
        // do something
    }

    return {

        publicProperty: "",

        publicMethod: function(args) {
            // do something
        },

        privilegedMethod: function(args) {
            privateMethod(args);
        }
    }
})();