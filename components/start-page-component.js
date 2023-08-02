export function renderStartPage() {

    const appEl = document.getElementById('main');

    const appHTML = `<div class="app">
        <div class="level-selection">
            <h1 class="title">Выбери сложность</h1>
            <form id="levels" class="level-toolbar">
                <input type="radio" id="level1" name="level" value="Легкий">
                <label for="level1">1</label>

                <input type="radio" id="level2" name="level" value="Средний">
                <label for="level2">2</label>

                <input type="radio" id="level3" name="level" value="Сложный">
                <label for="level3">3</label>
                
                <button id="start-button" class="button">Старт</button>
            </form>
        </div>
    </div>`

    appEl.innerHTML = appHTML;
}