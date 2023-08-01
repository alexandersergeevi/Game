import { renderStartPage } from "./components/start-page-component.js";
import { renderGamePage } from "./components/game-page-component.js";

renderStartPage();

const startButton = document.getElementById("start-button");

const userLevel = document.getElementById("levels");

startButton.addEventListener("click", () => {
    console.log(`Выбранный уровень сложности - ${userLevel.elements["level"].value}`);
    renderGamePage();
}
)
