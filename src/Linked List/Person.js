
class Person {
    name;
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    print() {
        return `The name is ${this.name}`
    }
}

const obj1 = new Person("FBK", "fbk@gmail.com");
console.log(obj1.print());

const obj2 = new Person("karim", "karim@gmail.com");
console.log(obj2.print());

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}








