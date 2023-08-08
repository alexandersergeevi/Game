import { renderStartPage } from './components/start-page-component.js';
import { renderGamePage } from './components/game-page-component.js';

export const appEl = document.getElementById('main');

renderStartPage(appEl);

document.addEventListener('submit', (event) => {
    event.preventDefault();;
    renderGamePage(appEl);
});
