function Person(first, last, age, gender, interests) {

    this.first = first;
    this.last = last;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

var p1 = new Person('Judson', 'Paiva', 28, 'Masculino', ['Engenharia', 'Programação', 'TI']);
var p2 = new Person('Leonor', 'José Paiva', 26, 'Femenino', ['Redes', 'TI']);
var p3 = p1 + p2;