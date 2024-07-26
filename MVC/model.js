// * ~~~~~~~~~~~~~~~~~~~~ Model ~~~~~~~~~~~~~~~~~~~~
export const Model = (() => {
	const board = [];
    for (let i = 1; i <= 12; i++) {
        board.push({ id: i, hasMole: false});
    }
    return board;
})();

export class State {
    #board = [];
    #score = 0;
    #time = 30;
    #maxMoles = 3;
    #intervalId = null;
    #timerId = null;

    constructor(view, model) {
        this.view = view;
        this.#board = model; // Initialize board from model
    }

    get board() {
        return this.#board;
    }

    set board(newBoard) {
        this.#board = newBoard;
    }

    get score() {
        return this.#score;
    }

    set score(value) {
        this.#score = value;
        this.view.updateScore(this.#score);
    }

    get time() {
        return this.#time;
    }

    set time(value) {
        this.#time = value;
        this.view.updateTimer(this.#time);
    }

    initializeBoard() {
        this.#board = Model.map(block => ({ ...block, hasMole: false}));
    }

    resetGame() {
        this.#score = 0;
        this.#time = 30;
        this.initializeBoard();
        this.view.renderBoard(this.#board);
        this.view.updateScore(this.#score);
        this.view.updateTimer(this.#time);
    }

    endGame() {
        clearInterval(this.#intervalId);
        clearInterval(this.#timerId);
        alert('Time is Over!');
    }

    getRandomEmptyHole() {
        const emptyHoles = this.#board.filter(block => !block.hasMole);
        if (emptyHoles.length === 0) {
            return null;
        }
        const randomIndex = Math.floor(Math.random() * emptyHoles.length);
        return emptyHoles[randomIndex];
    }

    addMole() {
        if (this.#board.filter(block => block.hasMole).length >= this.#maxMoles){
            return;
        }
        const block = this.getRandomEmptyHole();
        if (block) {
            block.hasMole = true;
            this.view.renderMole(block.id);
        }
    }

    removeMole(id) {
        const block = this.#board.find(block => block.id === parseInt(id));
        if (block && block.hasMole) {
            block.hasMole = false;
            this.view.removeMole(block.id);
        }
    }

    decrementTime() {
        if (this.#time > 0) {
            this.#time--;
            this.view.updateTimer(this.#time);
        }
        if (this.#time === 0) {
            this.endGame();
        }
    }

    set intervalId(value) {
        this.#intervalId = value;
    }

    set timerId(value) {
        this.#timerId = value;
    }
}