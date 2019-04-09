interface Human {
    name: string;
    age: number;
    gender: string;
    mark: boolean;
    addTxt: any;
}

const person = {
    name: 'Wabi',
    age: 29,
    gender: 'male',
    mark: false,
    addTxt: ''
};
const sayHiFn = (person: Human): string => {
    return `Hey ${person.name}, your age is ${person.age} isn't it? and also your gender is ${person.gender}. Right ${
        person.mark === true ? '?' : ''
    }`;
};

console.log(sayHiFn(person));
export {};
