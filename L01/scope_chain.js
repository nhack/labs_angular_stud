function first() {
    second();

    function second() {
        third();

        function third() {
            fourth();

            function fourth() {
                // do something
            }
        }
    }
}

first();