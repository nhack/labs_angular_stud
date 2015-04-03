(function() {
    var app = angular.module('pizzaStore', []);

    var pizzas = [{
        name: '4 STAGIONI',
        price: 27.5,
        weight: 550,
        ingredients: 'sos rosii, mozzarella, ciuperci, salam, sunca presata, oregano, anghinare',
        images: [
            'images/4_stagioni-01.jpg'
        ]
    }, {
        name: 'DIAVOLA',
        price: 25,
        weight: 450,
        ingredients: 'sos rosii, mozzarella, salam picant, oregano',
        images: [
            'images/diavola-01.jpg'
        ]
    }]

    app.controller('StoreController', function() {
        this.products = pizzas;
    });
})();