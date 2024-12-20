"use strict"

let customCursor = document.getElementById("custom-cursor");

//Moves the element (custom cursor) when the mouse is moved, using its position from the left and top of the screen
document.documentElement.addEventListener("mousemove", (e) => {
    customCursor.style.top = e.clientY + "px";
    customCursor.style.left = e.clientX + "px";
});
