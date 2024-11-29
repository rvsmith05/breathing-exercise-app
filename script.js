const breathingCircle = document.getElementById('breathing-circle');
const instruction = document.getElementById('instruction');
const startBtn = document.getElementById('start-btn');

let isBreathing = false;

startBtn.addEventListener('click', startBreathingExercise);

function startBreathingExercise() {
    if (isBreathing) return;
    isBreathing = true;
    startBtn.style.display = 'none';
    breathingCycle();
}

function breathingCycle() {
    breatheIn();
    setTimeout(() => {
        breatheOut();
        setTimeout(() => {
            if (isBreathing) breathingCycle();
        }, 4000);
    }, 4000);
}

function breatheIn() {
    breathingCircle.classList.add('breathe-in');
    breathingCircle.classList.remove('breathe-out');
    instruction.textContent = 'Breathe in...';
}

function breatheOut() {
    breathingCircle.classList.add('breathe-out');
    breathingCircle.classList.remove('breathe-in');
    instruction.textContent = 'Breathe out...';
}