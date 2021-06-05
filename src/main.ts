interface User {
  name: string
  age?: number
  getMessage(): string
}

const user: User = {
  name: "Kinjal",
  age: 21,
  getMessage() {
    return "Hello" + name
  }
}
