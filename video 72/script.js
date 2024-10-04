let boxes = document.getElementsByClassName("box");

function getRandomColor() {

    value1 = 0 + Math.ceil(Math.random()*(255-0));
    value2 = 0 + Math.ceil(Math.random()*(255-0));
    value3 = 0 + Math.ceil(Math.random()*(255-0));

   return `rgb(${value1}, ${value2}, ${value3})`;
    
}

Array.from(boxes).forEach(element => {
    element.style.backgroundColor = getRandomColor()
});