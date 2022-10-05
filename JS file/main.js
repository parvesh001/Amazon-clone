/******* Side Nav Bar *******/

let showSideBar = document.getElementById("show-side-bar");
let hMenuContainer = document.getElementById("hmenu-container");
let hMenuBackground = document.getElementById("hmenu-background")
let hMenu = document.getElementById("hmenu");
let xMark = hMenu.children[2];

showSideBar.addEventListener("click", () => {
    hMenu.style.transform = "translateX(0)";
    xMark.style.display = "block";
    hMenuContainer.style.visibility = "visible";
    hMenuBackground.style.opacity = "1";
});
xMark.addEventListener("click", () => {
    hMenu.style.transform = "translateX(-100%)";
    xMark.style.display = "none";
    hMenuContainer.style.visibility = "hidden";
    hMenuBackground.style.opacity = "0";
});
