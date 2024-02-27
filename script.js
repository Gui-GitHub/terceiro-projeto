/*const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restart-btn');

let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(e) {
    const cellIndex = parseInt(e.target.getAttribute('data-index'));

    if (gameState[cellIndex] !== '' || !gameActive) return;

    gameState[cellIndex] = currentPlayer;
    e.target.textContent = currentPlayer;

    if (checkWin() || checkDraw()) {
        gameActive = false;
        message.textContent = checkWin() ? `${currentPlayer} venceu!` : 'Empate!';
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    message.textContent = `${currentPlayer}'s vez`;
}

function checkWin() {
    return winningConditions.some(condition => {
        return condition.every(index => {
            return gameState[index] === currentPlayer;
        });
    });
}

function checkDraw() {
    return gameState.every(cell => {
        return cell !== '';
    });
}

function restartGame() {
    currentPlayer = 'X';
    gameActive = true;
    gameState = ['', '', '', '', '', '', '', '', ''];
    message.textContent = `${currentPlayer}'s vez`;
    cells.forEach(cell => cell.textContent = '');
}

function toggleTheme() {
    container.classList.toggle('dark-mode');
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartBtn.addEventListener('click', restartGame);
themeToggle.addEventListener('click', toggleTheme);*/
const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restart-btn');
const themeToggle = document.getElementById('theme-toggle');

let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(e) {
    const cellIndex = parseInt(e.target.getAttribute('data-index'));

    if (gameState[cellIndex] !== '' || !gameActive) return;

    gameState[cellIndex] = currentPlayer;
    e.target.textContent = currentPlayer;

    if (checkWin() || checkDraw()) {
        gameActive = false;
        message.textContent = checkWin() ? `${currentPlayer} venceu!` : 'Empate!';
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    message.textContent = `${currentPlayer}'s vez`;
}

function checkWin() {
    return winningConditions.some(condition => {
        return condition.every(index => {
            return gameState[index] === currentPlayer;
        });
    });
}

function checkDraw() {
    return gameState.every(cell => {
        return cell !== '';
    });
}

function restartGame() {
    currentPlayer = 'X';
    gameActive = true;
    gameState = ['', '', '', '', '', '', '', '', ''];
    message.textContent = `${currentPlayer}'s vez`;
    cells.forEach(cell => cell.textContent = '');
}

function toggleTheme() {
    const container = document.querySelector('.container');
    const body = document.body;
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggle.checked = true;
    } else {
        themeToggle.checked = false;
    }
}

themeToggle.addEventListener('change', toggleTheme);
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartBtn.addEventListener('click', restartGame);

