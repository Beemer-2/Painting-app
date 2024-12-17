let canvas = document.querySelector("#canvas");
let eraseBtn = document.querySelector("#eraser");
let ctx = canvas.getContext("2d");
// mouse move, mouse down, mouseup;
let isDrawing = false;
let isErasing = false;
eraseBtn.addEventListener("click", () => {
 isErasing = !isErasing; // Toggle erasing mode
 if (isErasing) {
 eraseBtn.textContent = "Switch to Drawing"; // Update button text
 } else {
 eraseBtn.textContent = "Switch to Eraser";
 }
});
canvas.addEventListener("mousedown", (e) => {
 isDrawing = true;
 ctx.beginPath();
 ctx.moveTo(e.offsetX, e.offsetY);
});
canvas.addEventListener("mousemove", (e) => {
 if (isDrawing) {
 if (isErasing) {
 ctx.clearRect(e.offsetX, e.offsetY, 20, 20); // Eraser size 20x20
 } else {
 ctx.lineTo(e.offsetX, e.offsetY);
 ctx.strokeStyle = 'red';
 ctx.stroke();
 }
 }
});
canvas.addEventListener("mouseup", () => {
 isDrawing = false;
});
let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
 ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
});