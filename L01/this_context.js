'use strict';

function getType(obj) {
    return obj.constructor.name;
}


//ceate new onject directly -> Object - constructor
var object = {
    foo: function() {
        console.log('object.foo: ' + getType(this));
        console.log('(object === this): ' + (object === this)); // true
    }
};

object.foo(); // Object


function foo() {
    try {
        console.log('foo: ' + getType(this));
    } catch(err) {
        console.log('this: ' + this);
    }
}

// create new object by using foo as constructor
new foo(); // foo
// call method directly -> the global scope is the context
foo(); // window or undef(this will be undef -> TypeError)