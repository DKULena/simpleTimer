let timer;
let isRunning = false;
let totalSeconds = 60; // Default to 1 minute

const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');

function updateDisplay() {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    hoursInput.value = hours.toString().padStart(2, '0');
    minutesInput.value = minutes.toString().padStart(2, '0');
    secondsInput.value = seconds.toString().padStart(2, '0');
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startBtn.textContent = 'STOP';
        timer = setInterval(() => {
            if (totalSeconds > 0) {
                totalSeconds--;
                updateDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                startBtn.textContent = 'START';
            }
        }, 1000);
    } else {
        clearInterval(timer);
        isRunning = false;
        startBtn.textContent = 'START';
    }
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    startBtn.textContent = 'START';
    totalSeconds = parseInt(hoursInput.value) * 3600 +
                   parseInt(minutesInput.value) * 60 +
                   parseInt(secondsInput.value);
    updateDisplay();
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

hoursInput.addEventListener('change', resetTimer);
minutesInput.addEventListener('change', resetTimer);
secondsInput.addEventListener('change', resetTimer);

updateDisplay();