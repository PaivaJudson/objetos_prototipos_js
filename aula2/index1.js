class Person {

    constructor(name) {
        this.name = name;
    }

    introduceSelf() {
        console.log(`Hi I'm ${this.name}`);
    }
}


class Professor extends Person {

    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    }

    introduceSelf() {
        console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
    }

    grade(paper) {
        const grade = Math.floor(Math.random() * (5 - 1) + 1);
        console.log(grade);
    }

}


class Student extends Person {


    constructor(name, year) {
        super(name);
        this.year = year;
    }

    introduceSelf() {
        console.log(`Hi! I'm ${this.name}, and I'm in year ${this.year}.`);
    }

    canStudyArchery() {
        return this.year > 1;
    }

}




const p1 = new Person('Quissanga Paiva');

const prof1 = new Professor('Judson Paiva', 'TLP');
prof1.grade('my paper');

const summers = new


// classe sem atributos

    class Animal {

    sleep() {
        console.log('abcdefg');
    }

}