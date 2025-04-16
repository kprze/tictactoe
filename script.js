function createPlayer (name, marker){
    return {name, marker};
}

const Gameboard = (function(){
    let board = ['','','','','','','','',''];
    
    const getBoard = () => board;

    const resetBoard = () => {
        board = ['','','','','','','','',''];
    }

    const addMarker = (index, marker) => {
        if (board[index] === ''){
            board[index] = marker;
            return true;
        }
        return false;
    }

    const checkWinner = (marker) => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
            [0, 4, 8], [2, 4, 6]             // diagonal
        ];
        return winningCombinations.some(combination => {
            return combination.every(index => board[index] === marker);
        });
    }

    const isFull = () => {
        return board.every(cell => cell !== '');
    }

    return {getBoard, addMarker, checkWinner, isFull, resetBoard}; 
})();