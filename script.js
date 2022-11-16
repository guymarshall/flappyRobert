let block = document.getElementById("block");
let hole = document.getElementById("hole");
let character = document.getElementById("character");

hole.addEventListener("animationiteration", () => {
    let random = -((Math.random() * 300) + 150);
    hole.style.top = random + "px";
});
setInterval(() => {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    character.style.top = (characterTop + 3) + "px";
}, 10);