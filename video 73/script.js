// function createCard(title, cName, views, monthsOld, duration, thumbnail){
//     // Finish this function
// }


// createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")








function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    document.querySelector(".card img").setAttribute("src", `${thumbnail}`)
    document.querySelector(".title").insertAdjacentText("afterbegin", `${title}`)
    document.querySelector(".cName").insertAdjacentText("afterbegin", `${cName}`)
    document.querySelector(".views").insertAdjacentText("afterbegin", `${views}`)
    document.querySelector(".monthsOld").insertAdjacentText("afterbegin", `${monthsOld}`)
    document.querySelector(".duration span").insertAdjacentText("afterbegin", `${duration}`)
}
createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "CodeWithHarry", "580K", "3 Months ago", "31:20", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")


