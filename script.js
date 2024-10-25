//Creates the grid
function createGrid(size) {
    //Selects the container where the grid will be placed
    const container = document.querySelector('.container');
    
    //Clears any existing grid
    container.innerHTML = '';

    const squareSize = 960 / size;//Calculation of each grids size

    //Creates the grid squares
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div'); //Creates a new div for each square
        div.style.width = `${squareSize}px`; //width
        div.style.height = `${squareSize}px`; //height
        div.style.border = '1px solid rgb(8, 64, 64);'; //border
        div.style.boxSizing = 'border-box';
        div.style.backgroundColor = 'lightcyan';

        //Adds the hover effect
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = 'darkcyan';
        });

        container.appendChild(div); //Adds every square to the container
    }
}

//Prompts User Input
function promptForGridSize() {
    let input = prompt("Enter the number of squares per side (1-100):");

    let size = Number(input);//Converts input from string to number

    if (size >= 1 && size <= 100) {//Valid input
        createGrid(size);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
}

//Button click event
document.getElementById('new-grid-button').addEventListener('click', promptForGridSize);
