// .foo is a input element
var someElement = document.querySelector(".foo");
console.log(someElement.value);
someElement.addEventListener("blur", function (event) {
    var target = event.target;
    console.log(target.value);
});
