# Studying and testing typescript

#### Learning typescript by making a blockchain

#### 1. Create a config.json file for compiling typescript (tsconfig.json)
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
#### 2. How to compile typscript and test it?
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
#### 3. Typescript will say "it will gonna be an error" when i make a stupid mistake, like the code below

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
---

#### 4. Alway type "yarn start" for running compiling typescript......?!

```
"scripts": {
    "start": "tsc-watch --onSuccess \" node dist/index.js\" "
}
```

> tsc-watch will make it easy for me

---

#### 5. Edit tsconfig.json for setting directories output & include.

```
{
    "compilerOptions": {
        ...
        "outDir": "dist"
    },
    "include": ["src/**/*"],
    ...
}
```

---

#### 6. What is interface? and Class vs Interface

```
interface Human {
    name: string;
    age: number;
    gender: string;
    mark: boolean;
    addTxt: any;
}
```

```
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
```

> An interface is a group of related properties and methods that describe an object,\
but neither provides implementation nor initialisation for them.\
Since both of these structures define what an object looks like,\
both can be used in TypeScript to type our variables.

> HyunSeob님 블로그 글 참조\
https://hyunseob.github.io/2016/10/17/typescript-interface/

---

#### 7. Result array with blockchain code

```
[ Block {
    index: 0,
    hash: '2020202020022222',
    previousHash: '',
    data: 'yo man',
    timestamp: 123456 },
  Block {
    index: 1,
    hash:
     'e836e4b87a2db9c3b5828b601690ea62c50eb05a50b8e292ab45a4a61770c986',
    previousHash: '2020202020022222',
    data: 'Waaaaaatsup : 1',
    timestamp: 1554893858 },
  Block {
    index: 2,
    hash:
     '5801c1a6f98601786e20ae9d6f96a59722772809a6775647eb40e28fb3b14171',
    previousHash:
     'e836e4b87a2db9c3b5828b601690ea62c50eb05a50b8e292ab45a4a61770c986',
    data: 'hahaha : 2',
    timestamp: 1554893858 },
  Block {
    index: 3,
    hash:
     'e4eddae8291307651fb409e1ef930cd6cfabb3340c297cc1bde5d7341058c21d',
    previousHash:
     '5801c1a6f98601786e20ae9d6f96a59722772809a6775647eb40e28fb3b14171',
    data: 'dafasfasf : 3',
    timestamp: 1554893858 },
  Block {
    index: 4,
    hash:
     'c4aad9088b2a151e2a1bdd693a5ccb4dff37fd5a48632d458ea4a0582a42f623',
    previousHash:
     'e4eddae8291307651fb409e1ef930cd6cfabb3340c297cc1bde5d7341058c21d',
    data: 'afewfewewe : 4',
    timestamp: 1554893858 } 
]
```