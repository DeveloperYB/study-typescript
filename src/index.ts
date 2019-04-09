// interface Human {
//     name: string;
//     age: number;
//     gender: string;
//     mark: boolean;
//     addTxt: any;
// }

class Human {
    public name: string;
    public age: number;
    public gender: string;
    public mark: boolean;
    public addTxt: any;
    constructor(name: string, age: number, gender: string, mark: boolean, addTxt?) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.mark = mark;
        this.addTxt = addTxt;
    }
}

const Wife = new Human('Yuna', 30, 'female', true, 'Ma boss');

const person = {
    name: 'Wabi',
    age: 29,
    gender: 'male',
    mark: false,
    addTxt: ''
};
const sayHiFn = (person: Human): string => {
    return `Hey ${person.addTxt} ${person.name}, your age is ${person.age} isn't it? and also your gender is ${person.gender}. Right ${
        person.mark === true ? '?' : ''
    }`;
};

console.log(sayHiFn(Wife));
export {};
