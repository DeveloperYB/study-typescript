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