let interval;

const startTimer = () => {
    let timerIncremement = document.getElementById('tensTimer')
    timerIncremement.innerHTML ++
}

const startButton = () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
}

const stopTimer = () => {
    clearInterval(interval)
}

const resetTimer = () => {
    clearInterval(interval)

    document.getElementById('tensTimer').innerHTML = '00'
    document.getElementById('secondsTimer').innerHTML = '00'
}
