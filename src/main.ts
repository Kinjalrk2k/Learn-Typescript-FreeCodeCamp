interface UserInterface {
  getFullName(): string
}

class User implements UserInterface {
  private firstname: string 
  private lastname: string
  readonly unchangableName: string
  static maxAge = 50

  constructor(firstname: string, lastname: string) {
    this.firstname = firstname
    this.lastname = lastname
    this.unchangableName = firstname
  }

  getFullName(): string {
    return this.firstname + " " + this.lastname
  }
}

class Admin extends User {
  private editor: string

  setEditor(editor: string): void {
    this.editor = editor
  }

  getEditor(): string {
    return this.editor
  }
}

const user1 = new User("Kinjal", "Raykarmakar")
console.log(user1.getFullName())