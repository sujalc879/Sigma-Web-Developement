const prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.01) {
    console.log(a);
    reject("less than Half Is Not supporting You...");
  } else {
      setTimeout(() => {
      document.body.style.backgroundColor = "yellow";
      console.log(a);
      
      resolve("sujal")
    }, 3000);
  }
})


const prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.01) {
    console.log(a);
    reject("less than Half Is Not supporting You... 2");
  } else {
      setTimeout(() => {
      document.body.style.backgroundColor = "red";
      console.log(a);
      
      resolve("sujal 2")
    }, 5000);
  }
})

const prom3 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.01) {
    console.log(a);
    reject("less than Half Is Not supporting You... 3");
  } else {
      setTimeout(() => {
      document.body.style.backgroundColor = "blue";
      console.log(a);
      
      resolve("sujal 3")
    }, 10000);
  }
})

const prom4 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.01) {
    console.log(a);
    reject("less than Half Is Not supporting You... 4");
  } else {
      setTimeout(() => {
      document.body.style.backgroundColor = "pink";
      console.log(a);
      
      resolve("sujal 4")
    }, 12000);
  }
})

const prom5 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.01) {
    console.log(a);
    reject("less than Half Is Not supporting You... 5");
  } else {
      setTimeout(() => {
      document.body.style.backgroundColor = "black";
      console.log(a);
      
      resolve("sujal 5")
    }, 15000);
  }
})





// This is a Example of Promise.all

// let p3 = Promise.all([prom1, prom2, prom3, prom4, prom5])

// p3.then((a) => {
//   console.log(a);
//   }).catch((error) => {
//     console.log(error);
//     });


// This is a Example of Promise.allSettled

// let p3 = Promise.allSettled([prom1, prom2, prom3, prom4, prom5])

// p3.then((a) => {
//   console.log(a);
//   }).catch((error) => {
//     console.log(error);
//     });



// This is a Example of Promise.race

// let p3 = Promise.race([prom1, prom2, prom3, prom4, prom5])

// p3.then((a) => {
//   console.log(a);
//   }).catch((error) => {
//     console.log(error);
//     });


let p3 = Promise.reject([prom1, prom2, prom3, prom4, prom5])

p3.then((a) => {
  console.log(a);
  }).catch((error) => {
    console.log(error);
    });