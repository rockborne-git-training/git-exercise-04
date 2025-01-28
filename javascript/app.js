// Function to open the modal and display the information
function openModal(name, position, description, imgSrc) {
    document.getElementById("myModal").style.display = "flex";  // Show modal
    document.getElementById("modal-name").textContent = name;
    document.getElementById("modal-position").textContent = position;
    document.getElementById("modal-description").textContent = description;
    document.getElementById("modal-img").src = imgSrc;  // Set the image source
}

// Function to close the modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";  // Hide modal
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        closeModal();
    }
}

// Ensure the modal stays hidden initially
window.onload = function() {
    document.getElementById("myModal").style.display = "none";
};
