
//search bar
let search = document.getElementById("search");
let searchOpt = document.getElementById("search-option");

search.addEventListener("focus", () => {
    searchOpt.style.border = "3px solid orange";
})
search.addEventListener("blur", () => {
    searchOpt.style.border = "3px solid transparent";
});