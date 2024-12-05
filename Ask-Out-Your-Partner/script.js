// script.js

document.addEventListener("DOMContentLoaded", function() {
    var yesButton = document.getElementById("yesButton");

    if (yesButton) {
        yesButton.addEventListener("click", navigateToNewPage);
    }

    function navigateToNewPage() {
        // Change "newpage.html" to the actual path of your new page
        window.location.href = "yespage.html";
    }

    var noButton = document.getElementById("noButton");

    if (noButton) {
        noButton.addEventListener("mouseover", setNewPosition);
    }

    function getRandomPosition() {
        var newX = Math.floor(Math.random() * (window.innerWidth - 100));
        var newY = Math.floor(Math.random() * (window.innerHeight - 50));
        return { x: newX, y: newY };
    }

    function setNewPosition() {
        var newPosition = getRandomPosition();
        noButton.style.position = "absolute";
        noButton.style.left = newPosition.x + "px";
        noButton.style.top = newPosition.y + "px";
    }
});
