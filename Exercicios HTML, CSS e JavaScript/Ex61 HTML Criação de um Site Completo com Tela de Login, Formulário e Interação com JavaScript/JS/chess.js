const board = document.getElementById('chess-board');
const initialPosition = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
];

const pieceSymbols = {
    'r': '♜', 'n': '♞', 'b': '♝', 'q': '♛', 'k': '♚', 'p': '♟',
    'R': '♖', 'N': '♘', 'B': '♗', 'Q': '♕', 'K': '♔', 'P': '♙'
};

// Função para criar o tabuleiro
function createBoard() {
    for (let row = 0; row < 8; row++) {
        const tr = document.createElement('tr');
        for (let col = 0; col < 8; col++) {
            const td = document.createElement('td');
            td.dataset.row = row;
            td.dataset.col = col;
            td.dataset.color = (row + col) % 2 === 0 ? 'white' : 'black';

            // Adicionar peça
            const piece = initialPosition[row][col];
            if (piece) {
                const pieceElement = document.createElement('span');
                pieceElement.textContent = pieceSymbols[piece];
                pieceElement.classList.add('piece');
                pieceElement.dataset.color = row < 2 ? 'black' : 'white';
                td.appendChild(pieceElement);
            }

            td.addEventListener('click', onCellClick);
            tr.appendChild(td);
        }
        board.appendChild(tr);
    }
}

// Variáveis para controlar o estado do jogo
let selectedPiece = null;
let currentPlayer = 'white';

// Função chamada quando uma célula é clicada
function onCellClick(event) {
    const targetCell = event.target;

    // Verifica se a célula contém uma peça
    const piece = targetCell.querySelector('.piece');
    if (piece) {
        // Se uma peça já foi selecionada, move a peça
        if (selectedPiece) {
            // Checa a cor da peça selecionada e a do alvo
            const selectedPieceColor = selectedPiece.dataset.color;
            const targetPieceColor = piece.dataset.color;

            if (selectedPieceColor !== targetPieceColor) {
                targetCell.appendChild(selectedPiece);
                selectedPiece = null;
                switchPlayer();
            } else {
                selectedPiece = null;
            }
        } else {
            // Seleciona a peça
            selectedPiece = piece;
        }
    }
}

// Alterna entre os jogadores
function switchPlayer() {
    currentPlayer = currentPlayer === 'white' ? 'black' : 'white';
}

// Inicia o jogo
createBoard();
