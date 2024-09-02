const timeEnd = new Date('1/1/2025')

function updateTime() {
    let today = new Date()
    let diff = Math.floor((timeEnd - today) / 1000)

    // Calculate remaining time
    let secLeft = diff % 60
    diff = Math.floor(diff / 60)
    let minLeft = diff % 60
    diff = Math.floor(diff / 60)
    let hourLeft = diff % 24
    let daysLeft = Math.floor(diff / 24)

    // Update the HTML elements with the remaining time
    document.getElementById('days').textContent = daysLeft
    document.getElementById('hours').textContent = hourLeft.toString().padStart(2, '0')
    document.getElementById('minutes').textContent = minLeft.toString().padStart(2, '0')
    document.getElementById('seconds').textContent = secLeft.toString().padStart(2, '0')
}

updateTime()


setInterval(updateTime, 1000)