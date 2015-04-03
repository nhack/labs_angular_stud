(function() {
    var app = angular.module('pizzaStore', []);

    var pizzas = [{
        name: '4 STAGIONI',
        price: 27.5,
        weight: 550,
        ingredients: 'sos rosii, mozzarella, ciuperci, salam, sunca presata, oregano, anghinare',
        images: [
            'images/4_stagioni-01.jpg',
            'images/4_stagioni-02.jpg',
            'images/4_stagioni-03.jpg'
        ]
    }, {
        name: 'DIAVOLA',
        price: 25,
        weight: 450,
        ingredients: 'sos rosii, mozzarella, salam picant, oregano',
        images: [
            'images/diavola-01.jpg',
            'images/diavola-02.jpg',
            'images/diavola-03.jpg'
        ]
    }, {
        name: 'MARGHERITA',
        price: 17.5,
        weight: 350,
        ingredients: 'sos rosii, mozzarella, oregano',
        images: []
    }]

    app.controller('StoreController', function() {
        this.products = pizzas;
    });
})();