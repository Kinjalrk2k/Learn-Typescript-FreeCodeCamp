# Learn TypeScript - Full Course for Beginners (FreeCodeCamp)

- Javascript in OK for small or medium sized projects. For larger projects, we preder to use TypeScript.
- TypeScript > JavaScript:
  - Getting errors while transpiling (in the editor or in the console) rather than in the runtime
  - JavaScript code is difficult to maintain and scale.
  - There's no strong datatypes in JavaScript, we cant create entities. In contrary, TypeScript has strong entities with properties
- TypeScript is a superset of JavaScript, in other words, it acts like an extension. Changing JavaScript to TypeScript is easy
- TypeScript cannot be run directly in the browsers, as they dont support it. TypeScript needs to be transpiled to JavaScript before we can use it in browser

## TypeScript Tools

- NodeJS
- TypeScript: `npm install -g typescript`
- Check the version of TypeScript `tsc -v`

## Writing TypeScript

- We can create a TypeScript file with a `.ts` file extension.
- Transfile the TypeScript file using `tsc <filename>.ts`
- This will generate a transpiled version as `<filename>.js`
  > Note: `tsc` transpiles TypeScript code to ES3, which is though a old version, but safe to run in the browser
- Watch mode: Detects file changes and triggers transpile
- The `tsconfig.json` file:
  - Uses several configurations to automate our project
  - We can specify to transpile all the code from the `./src` folder to `./dist` folder

## TypeScript Definations

Variables:

- We define variables in TypeScript the same way we do in JavaScript
- In TypeScript we can only change the value of a variable in within the same type. That means we can't assign a `boolean` value to a `string` variable
- Types are automatically understood by TypeScript but it is recommended to explicitly specify the types
- `let hello: string = "world"`

Functions:

- Arrow functions are supported
- We can also use the `function` keyword
- Types can be specified in the function parameters
- Also, return type of the function should be mentioned

- ```ts
  const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
  };
  ```
