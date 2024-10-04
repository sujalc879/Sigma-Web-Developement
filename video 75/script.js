// console.log("hii Brother")


// console.log("How are you")

// setTimeout(() => {
//     console.log("where are you from ? ")
// }, 2000);

// setTimeout(() => {
//     console.log("I am From Maharastra...")
// }, 3000);


// console.log("The End")

// fn = () => {
//   console.log("Nothing");
// }


// let callback = (arg) => {
//   console.log(arg)
//   fn()
// }


let hii = () => {
  let arr = "red";
  document.body.style.backgroundColor = arr;
}



let fn = () => {
  console.log("hellof")
  hii()
}


let callback = (agrument) => {
 alert(agrument)
  fn()
}


let loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("harry" , fn, hii);
  document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

