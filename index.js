// * ~~~~~~~~~~~~~~~~~~~~ View ~~~~~~~~~~~~~~~~~~~~
export const View = (() => {

    // Dom elements
    let gameBoard = document.querySelector('game-board');
    let scoreValue = document.getElementById('score');
    let timerValue = document.getElementById('time-left');
    let startButton = document.getElementById('start-button');
    let blockElements = document.getElementsByClassName('block');

    return {
        gameBoard,
        scoreValue,
        timerValue,
        startButton,
        blockElements
    }
})();

// * ~~~~~~~~~~~~~~~~~~~~ Model ~~~~~~~~~~~~~~~~~~~~
export const Model = ((api) => {
	return {
		...api,
	};
})(API);

export class State {

}

export class Todo {

}

// * ~~~~~~~~~~~~~~~~~~~~ Controller ~~~~~~~~~~~~~~~~~~~~
export const Controller = ((model, view) => {

})(Model, View);
