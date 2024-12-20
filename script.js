"use strict"


let canvas = document.querySelector("#canvas");
let eraseBtn = document.querySelector("#eraser");
let ctx = canvas.getContext("2d");

// mouse move, mouse down, mouseup;
let isDrawing = false;
let isErasing = false;
let color = "#000000";

eraseBtn.addEventListener("click", () => {
    isErasing = !isErasing; // Toggle erasing mode
    if (isErasing) {
        customCursor.src = "./Rubber on Pencil.png";
        eraseBtn.textContent = "Switch to Drawing"; // Update button text
    } else {
        customCursor.src = "./Paint Brush.png"
        eraseBtn.textContent = "Switch to Eraser";
    }
});

//Checks if the mouse is held down. If it is, the drawing starts
canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

//Checks to see if the mouse is moving.
canvas.addEventListener("mousemove", (e) => {
 if (isDrawing) {
    if (isErasing) {
        ctx.clearRect(e.offsetX, e.offsetY, 20, 20); // Eraser size 20x20
    } else {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.strokeStyle = color;
        ctx.stroke();
        }
    }
});

//Tells the program to stop drawing when the mouse left click is released
canvas.addEventListener("mouseup", () => {
    isDrawing = false;
});

let clearCanvasButton = document.querySelector("#clear-canvas-button");
let clearMessage = document.querySelector("#clearing-canvas-display");
clearMessage.style.display = "none";

//Clears the canvas when the button is clicked
clearCanvasButton.addEventListener("click", () => {
    //Gets confirmation of the deletion
    let clearConfirmation = confirm("Are you sure you want to clear the canvas? THIS WILL ERASE YOUR DRAWING FOREVER!");
    //If the confirmation is set to true, a message pops up and the document is cleared
    if (clearConfirmation) {
        clearMessage.style.display = "block";
        //Shows an ellipsis being created slowly.
        setTimeout(() => {clearMessage.textContent = clearMessage.textContent + "."}, 250);
        setTimeout(() => {clearMessage.textContent = clearMessage.textContent + "."}, 500);
        setTimeout(() => {clearMessage.textContent = clearMessage.textContent + "."}, 750);
        //Hides the message
        setTimeout(() => {clearMessage.style.display = "none"}, 1000);

        //Resets the message content, so it can be used again without millions of dots
        clearMessage.textContent = "Clearing content";


        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clears the whole canvas
    }
});


let colorInput = document.querySelector("#color-input");

//Runs every time a value is inputted into the color input field
colorInput.addEventListener("input", () => {

    console.log(colorInput.value);

    //Sets color to the new color value, so next time a line is drawn, the new color is used
    color = colorInput.value;
});

