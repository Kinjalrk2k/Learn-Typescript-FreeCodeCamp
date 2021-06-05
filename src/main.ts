const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16)

  return {
    ...obj,
    id
  }
}

interface UserInterface<T, V> {
  name: string
  data: T
  otherdata: V
}

const user1: UserInterface<{meta: string}, string> = {
  name: "Jack",
  data: {
    meta: "foo"
  },
  otherdata: "bar"
}

const user2: UserInterface<string[]> = {
  name: "Jack",
  data: ["foo", "bar"]
}

const result = addId<UserInterface>(user)
console.log(result)