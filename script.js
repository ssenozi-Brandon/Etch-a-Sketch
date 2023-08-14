const container = document.querySelector('.container');
const newGridButton = document.getElementById('new-grid-button');

function createGrid(size) {
    container.innerHTML = ''; // Clear previous grid
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}

function changeColor(e) {
    const square = e.target;
    const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    square.style.backgroundColor = randomColor;
}

function setupEventListeners() {
    container.addEventListener('mouseover', changeColor);
    newGridButton.addEventListener('click', () => {
        const newSize = prompt('Enter the number of squares per side (1-100):');
        if (newSize !== null) {
            const size = parseInt(newSize);
            if (!isNaN(size) && size >= 1 && size <= 100) {
                createGrid(size);
            } else {
                alert('Please enter a valid number between 1 and 100.');
            }
        }
    });
}

createGrid(16); // Initial grid size
setupEventListeners();
