"use strict"


let canvas = document.querySelector("#canvas");
let eraseBtn = document.querySelector("#eraser");
let drawBtn = document.querySelector("#draw")
let ctx = canvas.getContext("2d");

// mouse move, mouse down, mouseup;
let isDrawing = false;
let isErasing = false;
let color = "#000000";

//Initialises the eraser size
let eraserSizeValue = 20;

eraseBtn.addEventListener("click", () => {
    customCursor.src = "./assets/pencil-rubber.png";
    isErasing = true;
    //eraseBtn.textContent = "Eraser (enabled)";
});

drawBtn.addEventListener("click", () => {
    customCursor.src = "./assets/paint-brush.png";
    isErasing = false;
    //drawBtn.textContent = "Drawing (enabled)";
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
        ctx.clearRect(e.offsetX, e.offsetY, eraserSizeValue, eraserSizeValue); // Sets the eraser size. Default is 20x20
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

//TODO: Make this work
function fillCanvas() {
    console.log("a")
    ctx.fill();
}


function downloadImage(image) {
    //Creates an "a" tag to be used to download the image
    var link = document.createElement('a');
    //Sets the download name
    link.download = "MyDrawing";
    //Sets up the download link
    link.href = canvas.toDataURL();
    //Clicks said link to download it
    link.click();
}

//Changes the brush size based on a slider input
let brushSizeInput = document.getElementById("brush-size");
brushSizeInput.addEventListener("input", () => {
    ctx.lineWidth = brushSizeInput.value;
});


let eraserSize = document.getElementById("eraser-size");
eraserSize.addEventListener("input", () => {
    eraserSizeValue = eraserSize.value;
;})