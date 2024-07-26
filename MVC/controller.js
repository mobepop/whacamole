import { Model, State } from "./model.js";
import { View } from "./view.js";

// * ~~~~~~~~~~~~~~~~~~~~ Controller ~~~~~~~~~~~~~~~~~~~~
export const Controller = ((model, view) => {
    const state = new State(view, model);

    const startGame = () => {
        const ele = document.querySelector(view.elements.startBtn);
		ele.addEventListener("click", (e) => {
            state.resetGame();
            state.intervalId = setInterval(() => {
                state.addMole();
            }, 1000);
            state.timerId = setInterval(() => {
                state.decrementTime();
            }, 1000);
        });
    };

    const handleClick = () => {
        const ele = document.querySelector(view.elements.gameBoard);
		ele.addEventListener("click", (e) => {
            const id = + e.target.id
            console.log(id);
            const block = state.board.find(block => block.id === id);
            if (block && block.hasMole) {
                state.removeMole(id);
                state.score++;
            }
        });

    };

    const init = () => {
        state.resetGame();
    };

    const bootstrap= ()=> {
        init();
        startGame();
        handleClick();
    };
    return {bootstrap};

})(Model, View);
