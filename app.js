const startTimer = () => {
    let timerIncremement = document.getElementById('tensTimer')
    timerIncremement.innerHTML ++
}

const startButton = () => {
    const interval = setInterval(startTimer, 100)
}