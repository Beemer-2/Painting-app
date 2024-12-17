"use strict"

let paintbrushCursor = document.getElementById("paintbrush-cursor");

//Moves the element (custom cursor) when the mouse is moved, using its position from the left and top of the screen
document.documentElement.addEventListener("mousemove", (e) => {
    paintbrushCursor.style.top = e.clientY + "px";
    paintbrushCursor.style.left = e.clientX + "px";
});
