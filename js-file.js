function addClassicHoverBehavior() {
    const gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach((gridSquare) => {
      gridSquare.addEventListener("mouseenter", function (e) {
        e.target.style.backgroundColor = "black";
      });
    });
  }


function createGrid(size) {
    gridContainer.innerHTML = ''; // Clear existing grid
    if (size === 16) {
    for (let j = 0; j < (size * size) - 1; j++) {
        let gridSquare = document.createElement("div");
        gridSquare.setAttribute(
          "style",
          "width: 36px; height: 36px; background-color:white;border: none; outline: 1px solid #000; margin: 0;"
        );
        gridSquare.classList.add("grid-square");
        gridContainer.appendChild(gridSquare);
      }
    } else if (size === 32) {
        for (let j = 0; j < (size * size) - 9; j++) {
            let gridSquare = document.createElement("div");
            gridSquare.setAttribute(
              "style",
              "width: 18px; height: 18px; background-color:white;border: none; outline: 1px solid #000; margin: 0;"
            );
            gridSquare.classList.add("grid-square");
            gridContainer.appendChild(gridSquare);
          }
    } else if (size === 64) {
        for (let j = 0; j < (size * size) - 49; j++) { //don't ask
            let gridSquare = document.createElement("div");
            gridSquare.setAttribute(
              "style",
              "width: 9px; height: 9px; background-color:white;border: none; outline: 1px solid #000; margin: 0;"
            );
            gridSquare.classList.add("grid-square");
            gridContainer.appendChild(gridSquare);
          }
    }

    addClassicHoverBehavior();
}
  
createGrid(16);

document.getElementById("btn16x16").addEventListener("click", function() {
    createGrid(16);
  });
  
document.getElementById("btn32x32").addEventListener("click", function() {
    createGrid(32);
  });
  
document.getElementById("btn64x64").addEventListener("click", function() {
    createGrid(64);
  });

const clearButton = document.getElementById("buttonThree");


clearButton.addEventListener("click", function(e) {
    const gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach((gridSquare) => {
        gridSquare.style.backgroundColor = "white";
    });
});

const rainbowButton = document.getElementById("buttonTwo");
rainbowButton.addEventListener("click", function () {
  const gridSquares = document.querySelectorAll(".grid-square");
  gridSquares.forEach((gridSquare) => {
    gridSquare.addEventListener("mouseenter", function (e) {
      const randomColor = getRandomRainbowColor();
      e.target.style.backgroundColor = randomColor;
    });
  });
});

function getRandomRainbowColor() {
  const rainbowColors = [
    "red", "orange", "yellow", "green", "blue", "purple"
  ];
  const randomIndex = Math.floor(Math.random() * rainbowColors.length);
  return rainbowColors[randomIndex];
}

const classicButton = document.getElementById("buttonOne");
classicButton.addEventListener("click", function () {
  addClassicHoverBehavior();
});

  







  





