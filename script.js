let display = document.getElementById('display');

// Додавання символу на дисплей
function appendToDisplay(value) {
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Очищення дисплею
function clearDisplay() {
    display.innerText = '0';
}

// Обчислення результату
function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = 'Помилка';
    }
}