(function() {
    var app = angular.module('pizzaStore', []);

    var pizza = {
        name: '4 STAGIONI',
        price: 27.5,
        weight: 550,
        ingredients: 'sos rosii, mozzarella, ciuperci, salam, sunca presata, oregano, anghinare'
    }

    app.controller('StoreController', function() {
        this.product = pizza;
    });
})();