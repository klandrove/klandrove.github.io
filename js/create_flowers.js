window.onload = function () {
    const container = document.getElementById("flower-container");

    if (!container) {
        console.error("Container element not found!");
        return;
    }

    const numFlowers = 5; // Adjust the number of flowers

    function createFlower() {
        const flower = document.createElement("div");
        flower.classList.add("flower");

        for (let i = 0; i < 9; i++) { // 9 petals
            const petal = document.createElement("div");
            petal.classList.add("petal");

            const circle = document.createElement("div");
            circle.classList.add("circle");

            const triangle = document.createElement("div");
            triangle.classList.add("triangle");

            petal.appendChild(circle);
            petal.appendChild(triangle);
            flower.appendChild(petal);
        }

        // Random position within container bounds
        const x = Math.random() * (container.clientWidth - 110);
        const y = Math.random() * (container.clientHeight - 100);

        flower.style.position = "absolute";
        flower.style.left = `${x}px`;
        flower.style.top = `${y}px`;

        container.appendChild(flower);
    }

    for (let i = 0; i < numFlowers; i++) {
        createFlower();
    }
};

