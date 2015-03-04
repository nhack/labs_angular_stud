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
console.log(marius.toString());\

person = new Person(); // create dummy person
console.log(person.toString.call(marius, '-')); // call toString for marius in the context of a person
console.log(person.toString.apply(marius, ['~'])); // apply (params are in a vector) toString for marius in the context of a person