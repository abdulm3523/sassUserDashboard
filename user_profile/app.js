//======== GALLERY SCRIPT
// ==== show small image to big screen
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("image-popup");
    const images = document.getElementsByClassName("popup-image");
    const popupContent = document.getElementById("popup-content");
    const closeBtn = document.querySelector(".close-btn");

    // Show popup with clicked image
    function showPopup(imageSrc) {
        popup.style.display = "block";
        popupContent.src = imageSrc;
    }

    // Hide popup
    function closePopup() {
        popup.style.display = "none";
    }

    // Attach click event to each image
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function () {
            const imageSrc = this.src;
            showPopup(imageSrc);
        });
    }

    // Close popup when close button is clicked
    closeBtn.addEventListener("click", closePopup);
});//======== GALLERY SCRIPT END