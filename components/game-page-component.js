export function renderGamePage() {

    const appEl = document.getElementById('main');

    const appHTML = `<div class="app">
    <div class="level-selection">
        <h1>Здесь будет верстка игры</h1>
    </div>
</div>`

    appEl.innerHTML = appHTML;
}