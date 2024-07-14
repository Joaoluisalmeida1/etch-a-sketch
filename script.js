document.addEventListener("DOMContentLoaded", function() {


    // to create a 16x16 grid, we need to first get the container
    const container = document.querySelector(".container");

    // need to create a function, makeGrid, that generates i rows and j columns as divs
    function makeGrid(gridSize) {        
        for (let i = 0; i < gridSize; i++) {
            let column = document.createElement("div");
            column.classList.add("column");
            for (let j = 0; j < gridSize; j++) {
                let row = document.createElement("div");
                row.classList.add("row");
                row.style.border = "2px solid black";
                row.innerText = `${j+1}${1+i}`;
                column.appendChild(row);
            }
            container.appendChild(column);
        }
    }
    makeGrid(16);


    const squares = document.querySelectorAll(".row");
    
    squares.forEach(square => {
       square.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = "purple";
       });
    });


});