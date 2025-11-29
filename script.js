// goal: fill up our etch a sketch container with squares
// we want 16 sqaures on each side

let squarePerSide = 16;

const container = document.querySelector(".container");

function generateFreshBoard() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const squareSize = 960 / squarePerSide;

  for (let i = 0; i < squarePerSide * squarePerSide; i++) {
    const newSquare = document.createElement("div");
    newSquare.style.width = squareSize + "px";
    newSquare.style.height = squareSize + "px";
    newSquare.style.backgroundColor = "blue";

    newSquare.addEventListener("mouseover", function () {
      newSquare.style.backgroundColor = getRandomColor();
    });

    container.appendChild(newSquare);
  }
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // 0-255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function changeSquaresAndResetBoard() {
  const newNumSquaresString = prompt(
    "Enter the new number of squares per side"
  );

  const newNumSquares = Number(newNumSquaresString);

  if (!isNaN(newNumSquares) && newNumSquares > 0 && newNumSquares <= 100) {
    squarePerSide = newNumSquares;
    generateFreshBoard();
  }
}

generateFreshBoard();

const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", generateFreshBoard);

const changeSquaresBtn = document.querySelector("#change-squares-btn");
changeSquaresBtn.addEventListener("click", changeSquaresAndResetBoard);
