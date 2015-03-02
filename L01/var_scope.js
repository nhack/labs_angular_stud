// global scope
var x = 10;

function foo() {
    // foo scope

    function bar() {
        // bar scope

        var y = 30;
        console.log("BAR scope");
        console.log('x = ' + x); // x = 10
        console.log('y = ' + y); // y = 30
        console.log('z = ' + z); // z = undef
    }

    bar();

    console.log("FOO scope");
    console.log('x = ' + x); // x = 10
    //console.log('y = ' + y); // ReferenceError y -> undef
    console.log('z = ' + z); // z = undef 

    {
        // begin new block code -> z is defined at the begining of the current function
        var z = 20;
        // let can be used to set the scope to the current block -> NOT standard only in FF
    }
}

foo();

console.log("GLOBAL scope");
console.log('x = ' + x); // x = 10
//console.log('y = ' + y); // ReferenceError y -> undef
//console.log('z = ' + z); // ReferenceError z -> undef