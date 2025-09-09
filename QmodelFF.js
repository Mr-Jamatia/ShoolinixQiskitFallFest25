const images = [
  "https://upload.wikimedia.org/wikipedia/commons/e/e3/Crop_Einstein.png",
  "https://upload.wikimedia.org/wikipedia/commons/c/ca/Crop_Heisenberg.png",
  "https://upload.wikimedia.org/wikipedia/commons/0/0a/Crop_Schrodinger.png",
];

let currentIndex = 0;
const quantumImage = document.getElementById("quantumImage");

setInterval(() => {
  quantumImage.classList.add("opacity-0"); // Start fade-out

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    quantumImage.src = images[currentIndex];
    quantumImage.classList.remove("opacity-0"); // Fade-in
  }, 500); // Match transition duration
}, 3000);
