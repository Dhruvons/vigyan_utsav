// Get references to the clickable image and the audio element
const clickableImage = document.getElementById("clickable-image");
const clickSound = document.getElementById("click-sound");

// Add a click event listener to the image
clickableImage.addEventListener("click", () => {
    // Play the clicking sound when the image is clicked
    clickSound.play();
});
