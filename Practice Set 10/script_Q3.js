let title = prompt("enter Note Title")
let noteVal = prompt("Enter Your Note That You Want to Save...");

localStorage.setItem(title, noteVal)

alert(localStorage.getItem(title))