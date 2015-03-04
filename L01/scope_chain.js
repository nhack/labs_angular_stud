function first() {
    var a = 1;
    var l = 'look';

    console.log('first a: ' + a);
    console.log('first l: ' + l);

    second();

    function second() {
        var a = 2;

        console.log('second a: ' + a);
        console.log('second l: ' + l);

        third();

        function third() {
            var a = 3;

            console.log('third a: ' + a);
            console.log('third l: ' + l);

            fourth();

            function fourth() {
                var a = 2;

                console.log('fourth a: ' + a);
                console.log('fourth l: ' + l);
            }
        }
    }
}

first();