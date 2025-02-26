document.addEventListener("DOMContentLoaded", function () {
    const frontEndCircle = document.getElementById("front-end");
    const frontEndContainer = document.querySelector(".front-end-container");
    const allCircles = document.querySelectorAll(".circle");
    const frontEndText = document.querySelector(".front-end-text");
    const wantToDo = document.querySelector(".want-to-do");


    function checkIfCentered() {
        const rect = frontEndCircle.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const centerThreshold = 20; // Adjust threshold for sensitivity

        if (
            rect.top + rect.height / 2 > windowHeight / 2 - centerThreshold &&
            rect.top + rect.height / 2 < windowHeight / 2 + centerThreshold
        ) {
            // Dim all circles
            allCircles.forEach(circle => circle.classList.remove("active"));

            // Highlight Front-End circle
            frontEndCircle.classList.add("active");
            frontEndContainer.classList.add("active");
            frontEndText.classList.add("active");
            wantToDo.classList.add("active");
        } else {
            frontEndContainer.classList.remove("active");
        }
    }

    window.addEventListener("scroll", checkIfCentered);
    checkIfCentered(); // Run on page load in case it's already centered
});
