const name = 'Wabi',
    age = 29,
    gender = 'male';

const sayHiFn = (name: string, age: number, gender: string): string => {
    return `Hey ${name}, your age is ${age} isn't it? and also your gender is ${gender}. Right?`;
};

console.log(sayHiFn(name, age, gender));
export {};
