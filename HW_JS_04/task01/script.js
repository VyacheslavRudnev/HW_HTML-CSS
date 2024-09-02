const info_div = document.getElementById('info_div')
const info_div2 = document.getElementById('info_div2')

let text1 = 'To be, or not to be, that is the question...\n\n'
let text2 = 'William Shakespeare, from Hamlet'
let word = 0

function getRandomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addTextToInfoDiv() {
    if (word < text1.length) {
        info_div.innerHTML += text1[word];
        word++;
        setTimeout(addTextToInfoDiv, getRandomInterval(50, 500))
    } else {
        setTimeout(startSecondText, 500)
    }
}

addTextToInfoDiv()

function startSecondText() {
    let word2 = 0

    function addTextToInfoDiv2() {
        if (word2 < text2.length) {
            info_div2.innerHTML += text2[word2]
            word2++
        }
    }
    setInterval(addTextToInfoDiv2, 200)
}