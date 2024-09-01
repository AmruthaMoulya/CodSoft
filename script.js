function press(value) {
    let display = document.getElementById('display');
    if (display.value === "0" && !isNaN(value)) {
        display.value = value; // Replace the initial 0 with the first number
    } else {
        display.value += value;
    }
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '0';
}
