let button = document.getElementById("btn");

// button.addEventListener("keyup", () => {
//      document.querySelector(".box").innerHTML = "Hai Bhava";
// })
// button.addEventListener("contextmenu", () => {
//     alert("you are clicked right button of the mouse ? ")
// })
// document.addEventListener("keydown", (e) => {
//    console.log(e.key , e.keyCode)
// })

// let color  = document.querySelector(".input")

// color.onClick = function () {
//     alert(`hiiiii`)
// }


function event() {
     alert("you are clicked right button of the mouse ? ")
}

button.addEventListener("dblclick", event )


function remove() {
    button.removeEventListener("dblclick", event )
}




    // function remove() {
    //     button.removeEventListener("click", () => {
    //         alert("you are clicked right button of the mouse ? ")
    //     } )
    // }


    // button.removeEventListener("click", "hii()")