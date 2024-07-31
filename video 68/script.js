console.log("Hello World");

// let box = document.getElementsByClassName("box")
// console.log(box)

// box[2].style.borderColor = "red"

// document.getElementById("hii").style.backgroundColor = "blue"

// console.log(document.getElementsByTagName("div"))



document.querySelector(".box").style.color = "red";

// document.querySelectorAll(".box").style.backgroundColor = "green"         we cannot set like this Because querySelectorAll returns an HTML Collection. we cant set style properties in this


// querySelectorAll Using for loop


// let element = document.querySelectorAll(".box");
// for (let i = 0; i < element.length; i++) {
//     element[i].style.backgroundColor = "red"    
// }




// querySelectorAll Using forin loop

// let element = document.querySelectorAll(".box");
// for (const key in element) {
    //       if (element.hasOwnProperty(key)) {
        //          element[key].style.backgroundColor = "red"    
        //       } 
        //     }
        
        
        



// querySelectorAll Using forof loop

// let element = document.querySelectorAll(".box")

// for (const iterator of element) {
//     iterator.style.backgroundColor = "red"
// }




// querySelectorAll Using forEach loop

// document.querySelectorAll(".box").forEach(element => {
//     element.style.backgroundColor = "red"
// });

