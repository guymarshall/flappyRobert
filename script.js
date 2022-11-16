let block = document.getElementById("block");
let hole = document.getElementById("hole");
let character = document.getElementById("character");
let jumping = 0;

hole.addEventListener("animationiteration", () => {
    let random = -((Math.random() * 300) + 150);
    hole.style.top = random + "px";
});
setInterval(() => {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (jumping == 0) {
        character.style.top = (characterTop + 3) + "px";
    }
}, 10);

let jump = () => {
    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(() => {
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if (characterTop > 6 && jumpCount < 15) {
            character.style.top = (characterTop - 5) + "px";
        }
        if (jumpCount > 20) {
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount++;
    }, 10);
};