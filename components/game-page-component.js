import { openedCardsArr } from './cards-component.js';

export function renderGamePage(appEl) {
    // const userLevel = document.getElementById('levels');
    // const levelGame = userLevel.elements['level'].value;

    const closedCardsArr = [];

    function getClosedCards() {
        for (let i = 0; i < 36; i++) {
            closedCardsArr.push(
                `<img class="cards-item" src="./img/рубашка.png">`,
            );
        }
        return closedCardsArr;
    }

    getClosedCards();

    const appHTML = `<div class="game-app">
    <div class="header-game">
        <div class="timer-box">
            <div class="timer-text">
                <p class="timer-text-style">min</p>
                <p class="timer-text-style">sec</p>
            </div>
            <h1 class="timer">00.00</h1>
        </div>
        <button class="button">Начать заново</button>
    </div>
    <div class="cards-container">${closedCardsArr.join('')}</div>
</div>`;

    appEl.innerHTML = appHTML;

    function getOpenedCards() {
        const appHTML = `<div class="game-app">
    <div class="header-game">
        <div class="timer-box">
            <div class="timer-text">
                <p class="timer-text-style">min</p>
                <p class="timer-text-style">sec</p>
            </div>
            <h1 class="timer">00.00</h1>
        </div>
        <button class="button">Начать заново</button>
    </div>
    <div class="cards-container">${openedCardsArr.join('')}</div>
</div>`;

    appEl.innerHTML = appHTML;
    }

    setTimeout(() => {
        getOpenedCards(appEl);
    }, 5000);
}
