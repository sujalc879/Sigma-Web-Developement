function createCard(title, cName, views, monthsAgo, thumbnail) {


    if (views > 1000 && views < 1000000) {
        views = views/1000 + "k"
    }
    else if (views > 100000) {
        views = views/1000000 + "M"
    }

    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
            </div>
            <div class="text">
             <div class="titleText"> ${title} </div>
             <div class="otherText">${cName} . ${views} views . ${monthsAgo} months ago </div>
                
            </div>
         </div>`;

        document.querySelector(".container").innerHTML =  document.querySelector(".container").innerHTML + html;
}

createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "CodeWithHarry", "800000", "8", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")