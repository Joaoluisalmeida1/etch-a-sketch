document.addEventListener("DOMContentLoaded", function() {

    function makeUserInput () {
        let input;
        do {
            input = prompt("How big would you like ths grid to be? The maximum is 100.");
        } while (isNaN(input) || input < 1 || input > 100);
        return parseInt(input, 10);
    };

    // need to create a function, makeGrid, that generates i rows and j columns as divs
    function makeGrid(gridSize) { 
        const grid = document.querySelector(".grid");
        grid.innerHTML = "";
        grid.style.display = "grid";
        grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        for (let i = 0; i < gridSize * gridSize; i++) {
            let cell = document.createElement("div");
            cell.classList.add("row");
            grid.appendChild(cell);
        }

        addPaintingListeners();
    }
    
    function addPaintingListeners() {
        const squares = document.querySelectorAll(".row");
        squares.forEach(square => {
            square.addEventListener("mouseenter", (event) => {
            if (isMouseDown) {
                event.target.style.backgroundColor = "pink";
                }
            });

            square.addEventListener("mousedown", (event) => {
                event.target.style.backgroundColor = "pink";
            });
        });
    }


    let isMouseDown = false;

    document.addEventListener("mousedown", () => {
        isMouseDown = true;
    });

    document.addEventListener("mouseup", () => {
        isMouseDown = false;
    });

    const gridButton = document.getElementById("gridButton")
    gridButton.addEventListener("click", () => {
        const gridSize = makeUserInput();
        makeGrid(0);
        makeGrid(gridSize);
    });

    const initialGridSize = makeUserInput();
    makeGrid(initialGridSize);
});