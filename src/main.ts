// .foo is a input element
const someElement = document.querySelector(".foo") as HTMLInputElement
console.log(someElement.value)

someElement.addEventListener("blur", (event) => {
  const target = event.target as HTMLInputElement
  console.log(target.value)
})