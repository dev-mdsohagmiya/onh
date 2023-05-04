let a = "f";
function x() {
  setTimeout(() => {
    //   a = Math.floor(Math.random() * 4);
    a = "hello";
  }, 1000);
}
x();
console.log(a);
