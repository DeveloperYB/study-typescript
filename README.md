# Studying and testing typescript

### Learning typescript by making a blockchain

> 1. Create a config.json file for compiling typescript (tsconfig.json) \
Basic config setting (the code below)

```
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es2015",
        "sourceMap": true
    },
    "include": ["index.ts"],
    "exclude": ["node_modules"]
}
```

> Node_modules in an array is usually basic and required.
---
> 2. How to compile typscript and test it?\
Use package.json and edit it like the code below
```
{
    ...,
    "scripts": {
        "start": "node index.js",
        "prestart": "tsc"
    }
}
```
> Run "yarn start", it will excute a js code compiled index.ts after cli tsc (yarn prestart)
---
> 3. Typescript will say "it will gonna be an error" when i make a stupid mistake, like the code below

```
const name = 'Wabi',
    age = 29,
    gender = 'male';

const sayHiFn = (name, age, gender) => {
    console.log(`Hey ${name}, your age is ${age} isn't it? and also your gender is ${gender}. Right?`);
};

sayHiFn(name, age);
```

> If i use only 2 arguments even though i have made 3 arguments. \
\
But what if i need to use only 2 arguments on the same code \
Just add "?" mark after the optional argument.

```
const sayHiFn = (name, age, gender?) => {
    ...
};
```