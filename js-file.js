const gridContainer = document.getElementById("gridContainer");


for (let h = 0; h < 16; h++) {
    let gridSquare = document.createElement("div");
    gridSquare.setAttribute(
      "style",
      "width: 60px; height: 60px; background-color:white;border:none;outline:1px solid #000"
    );
    gridSquare.classList.add("grid-square");
    gridContainer.appendChild(gridSquare);
}


const gridSquares = document.querySelectorAll(".grid-square");

gridSquares.forEach((gridSquare) => {
    gridSquare.addEventListener("mouseenter", function(e) {
        e.target.style.backgroundColor = "black"
    });
});






