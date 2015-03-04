function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;

    this.toString = function(separator) {
        if (!separator) {
            separator = '';
        } else {
            separator = ' ' + separator;
        }

        return this.firstName + ' ' + this.lastName + separator + ' [' + this.age + ']';
    }
}

function User(first, last, age, password) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.password = password;

    this.getPassowrdLength = function() {
        return password.length;
    }
}

marius = new User('Marius', 'Cristea', 29, 'marius');
console.log(marius.getPassowrdLength());
console.log(marius.toString());