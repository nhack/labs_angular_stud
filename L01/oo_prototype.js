function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

Person.prototype.toString = function(separator) {
    if (!separator) {
        separator = '';
    } else {
        separator = ' ' + separator;
    }

    return this.firstName + ' ' + this.lastName + separator + ' [' + this.age + ']';
}