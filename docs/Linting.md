# Code linting using ESLint and Prettier
Setting up eslint to work with typescript

* [Eslint](https://eslint.org/) Core eslint
* [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint#readme) Eslint parser to lint typescript code
* [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint#readme) Eslint rules for typescript code



```javascript 
// ESLint to work with TypeScript
npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

// Adding Prettier to the mix
npm i -D eslint-plugin-react
npm i -D prettier eslint-config-prettier eslint-plugin-prettier  


// Automatically Fix Code in VS Code
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
}

// Run ESLint with the CLI
{
  "scripts": {
    "lint": "eslint . --ext .js,.ts,.tsx --quiet --fix",
  }
}
```


# Resource
- [Using ESLint and Prettier in a TypeScript Project](https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project)