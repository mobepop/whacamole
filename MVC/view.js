// * ~~~~~~~~~~~~~~~~~~~~ View ~~~~~~~~~~~~~~~~~~~~
export const View = (() => {
    const elements = {
        startBtn: "#start-button",
        score: "#score",
        block: ".block",
        time: "#time-left",
        gameBoard: ".game-board"
    };

    const renderMole = (id) => {
        let i= parseInt(id)
        document.getElementById(id).innerHTML = `<img src="../assets/mole.jpg" width="200" height="200" id=${i}>`;
    };

    const removeMole = (id) => {
        document.getElementById(id).innerHTML = '';
    };

    const updateScore = (score) => {
        document.getElementById('score').innerText = `${score}`;
    };

    const updateTimer = (time) => {
        document.getElementById('time-left').innerText = time;
    };

    const renderBoard = (board) => {
        board.forEach(block => {
            const blockElement = document.getElementById(block.id);
            blockElement.innerHTML = ''; // Clear all blocks
        });
    };

    return {
        elements,
        renderMole,
        removeMole,
        updateScore,
        updateTimer,
        renderBoard
    };
})();