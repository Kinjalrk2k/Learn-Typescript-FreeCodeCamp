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

### Variables:

- We define variables in TypeScript the same way we do in JavaScript
- In TypeScript we can only change the value of a variable in within the same type. That means we can't assign a `boolean` value to a `string` variable
- Types are automatically understood by TypeScript but it is recommended to explicitly specify the types
- `let hello: string = "world"`

### Functions:

- Arrow functions are supported
- We can also use the `function` keyword
- Types can be specified in the function parameters
- Also, return type of the function should be mentioned

- ```ts
  const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
  };
  ```

## Interfaces

- Objects in JavaScript has no strict properties
- We can define types on-the-fly
- ```ts
  const user: { name: string; age: number } = {
    name: "Kinjal",
    age: 21,
  };
  ```
- Interfaces helps us create objects with some properties
- It is the code style to use interface name as TitleCase
- ```ts
  interface User {
    name: string;
    age: number;
  }

  const user: User = {
    name: "Kinjal",
    age: 21,
  };
  ```

- By default all properties inside interfaces are mandatory, but we can skip a property by putting `?`
- ```ts
  interface User {
    name: string;
    age?: number;
  }
  ```
- Interfaces gives us the best autocomplete support
- There can be functions in an Interface
- ```ts
  interface User {
    name: string;
    age?: number;
    getMessage(): string;
  }
  const user: User = {
    name: "Kinjal",
    age: 21,
    getMessage() {
      return "Hello" + name;
    },
  };
  ```
- Functions in interfeaces are actually defined in the object
- Interfaces and classes can cause name collisions. So, it is recommended to postfix the name with `Interface` like: `UserInterface` in place of `User`

## Union Operator

- We know that a variable in TypeScript has a type and it cannot be changed.
- If we need a variable which needs more than one type, we can use the union operator (`|`)
- `let pageName: string | number = "12"`
- Most popular use of Union is checking for `null` . That is initially, when we don't know the type we set the variable to `null` and later use it's actual type.
- `let errorMessage: string | null = null; // initailly null, but latter we can set a string`
- `let errorMessage: string | null // if we don't mention a default value, it is undefined`

## Type Alias

- Types can be alias using the `type` keyword
- `type ID = string // we can use ID as our type in place of string in anywhere in our code now `
- Makes code understandable
- ```ts
  type PopularTags = string;
  const popularTags = Populartags[] = ["dragon", "coffee"];
  ```
- Unions and Type can be combined
- ```ts
  type MaybePopularTags = string | null;
  const popularTags = MaybePopularTags[] = ["dragon", "coffee"];
  ```

## Few types in TypeScript

### `void`

- If we dont return anything from a function, we actually return `void`
- `void` is a set of `null` and `undefined`

### `any`

> Worst type in TypeScript

- Actually it makes variables same like JavaScript variables. Any type of values can be assigned
- Turns off TypeScript checks all together
- Avoid `any` at any costs :)

### `never`

- Functions with `never` can't be executed till the end
  > Need to study more on this!

### `unknown`

- Was introduced in TypeScript 3
- While initializing, `unknown` acts the same was as `any`
- But `unknown` variables cannot be assigned to anything, as TypeScript doesn't know what type `unknown` is

### assertion

- Used when converting one type to another
- When using `unknown` we have to use assertion to work with the variable
- `as` operator makes type assertion
- It's like casting
- ```ts
  let pageNumber = "1";
  let numericPageNumber = pageNumber as unknown as number;
  // first converting to unknown as: string and number types don't overlap
  ```

## Working with DOM

- TypeScript doesn't know anything about our markup
- `Element` is the highest class in hierarhy
- Generic Classes are written and then narrowed down with type assertion
- Type assertion should be done while using the DOM, because the generic classes might not have all the properties and will throw errors
- ```ts
  // .foo is a input element
  const someElement = document.querySelector(".foo") as HTMLInputElement;
  console.log(someElement.value);
  someElement.addEventListener("blur", (event) => {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
  });
  ```

## Classes

- TypeScripts support classes just like JavaScript from ES6
- Classes are sugar coated prototypes
- Everything is same as JavaScript classes
- Properties of a class can be accessed using `this` keyword
- We get direct access to everything within the class. Everything is public! By default, everything is public
- Access Level
  - `public`: Accessable everywhere
  - `private`: Accessable only within the class
  - `protected`: Accessable within the class and it's children (when using inheritence)
    > All these access levels only recides in Typescript. That means, when we transpile to JavaScipt, all these protection means nothing. No checks! Just prototypes! :(
- `readonly`: Cannot be re-assigned, once assigned. Sounds like constansts
- ```ts
  class User {
    private firstname: string;
    private lastname: string;
    readonly unchangableName: string;

    constructor(firstname: string, lastname: string) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.unchangableName = firstname;
    }

    getFullName(): string {
      return this.firstname + " " + this.lastname;
    }
  }

  const user1 = new User("Kinjal", "Raykarmakar");
  console.log(user1.getFullName());
  ```

### Implementing Interfaces

- We must create Interfaces and then Classes should implement them (generic Java knowledge)
- Interface will have the function header with no body
- We can create a common interface and different classes can use it's sharable code
- ```ts
  interface UserInterface {
    getFullName(): string;
  }

  class User implements UserInterface {
    private firstname: string;
    private lastname: string;
    readonly unchangableName: string;

    constructor(firstname: string, lastname: string) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.unchangableName = firstname;
    }

    getFullName(): string {
      return this.firstname + " " + this.lastname;
    }
  }

  const user1 = new User("Kinjal", "Raykarmakar");
  console.log(user1.getFullName());
  ```

### Static properties

- Static properties can be created on classes and not on instances
- We get static properties on the class itself and not on the object

### Inheritence

- A class can `extends` a parent class
- The child class automatically has access to all the parent class properties
- We can override properties and methods in the child class
- ```ts
  class Admin extends User {
    private editor: string;

    setEditor(editor: string): void {
      this.editor = editor;
    }

    getEditor(): string {
      return this.editor;
    }
  }
  ```

## Generics

- `<T>` is the default name for Generic
- We need generic when we need to pass an object to a function. TypeScript by default sees the passed object as `any` if we don't provide any type explicitly. Ans using `any` is bad, hence we use Generic
- The generic once defined withing the `<>` in the function can then be used in the function parameters and even inide the body on the function
- ```ts
  const addId = <T>(obj: T) => {
    const id = Math.random().toString(16);

    return {
      ...obj,
      id,
    };
  };
  ```

- The data type of the object is automatically passed in the Generic. So, Generic ins't `any` but the type we passed
- It is recommeded to explicitly pass the datatype in the function call to the generic as it is easier to read the code
- ```ts
  const result = addId<UserInterface>(user);
  ```
- We can extend the Generic to make it more specific: `<T extends object>(obj: T)`
- We can add Generics in Interfaces too!
- ```ts
  interface UserInterface<T> {
    name: string;
    data: T;
  }

  const user1: UserInterface<{ meta: string }> = {
    name: "Jack",
    data: {
      meta: "foo",
    },
  };

  const user2: UserInterface<string[]> = {
    name: "Jack",
    data: ["foo", "bar"],
  };
  ```

- Passing several Datatypes
- ```ts
  interface UserInterface<T, V> {
    name: string;
    data: T;
    otherdata: V;
  }

  const user1: UserInterface<{ meta: string }, string> = {
    name: "Jack",
    data: {
      meta: "foo",
    },
    otherdata: "bar",
  };
  ```

-
