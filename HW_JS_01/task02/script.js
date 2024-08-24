// Привітання
let nameInput = document.getElementById('nameInput')
let greetBtn = document.getElementById('greetBtn')
let result = document.getElementById('result')

greetBtn.addEventListener('click', ()=>{
    if(nameInput.value.length === 0) {
        result.style.color = 'red';
        result.innerText = "Введить Ваше ім'я!"
        clearSpan()
        return false
    }
    let name = nameInput.value
    result.innerText = `Привіт, ${name}!`
});

// Квадрат
let lengthInput = document.getElementById('lengthInput')
let calculateSquareBtn = document.getElementById('calculateSquareBtn')
let squareResult = document.getElementById('squareResult')

calculateSquareBtn.addEventListener('click', ()=>{
    if(lengthInput.value.length === 0) {
        squareResult.style.color = 'red';
        squareResult.innerText = 'Введить данні!'
        clearSpan()
        return false
    }
    let length = +lengthInput.value
    
    if(typeof(length) === 'number' && !isNaN(length)){
        squareResult.style.color = 'black';
        squareResult.innerText = `Для квадрату зі стороною ${length} см:\nПериметр = ${perimeterСalculations(length)} см,\nПлоща = ${squareСalculations(length)} см²`
    }else{
        squareResult.style.color = 'red';
        clearSpan()
        squareResult.innerText = 'Невірно введені данні'
    }
});

// Коло
let radiusInput = document.getElementById('radiusInput')
let calculateCircleBtn = document.getElementById('calculateCircleBtn')
let circleResult = document.getElementById('circleResult')

calculateCircleBtn.addEventListener('click', ()=>{
    if(radiusInput.value.length === 0) {
        circleResult.style.color = 'red';
        circleResult.innerText = 'Введить данні!'
        clearSpan()
        return false
    }
    let radius = +radiusInput.value
    
    if(typeof(radius) === 'number' && !isNaN(radius)){
        circleResult.style.color = 'black';
        circleResult.innerText = `Для кола радіусом ${radius} см\nПлоща = ${circleSquare(radius)} см²\nДовжина кола = ${circleLeght(radius)} см`
    }else{
        circleResult.style.color = 'red';
        clearSpan()
        circleResult.innerText = 'Невірно введені данні'
    }
});

// Швидкість руху
let distanceInput = document.getElementById('distanceInput')
let timeInput = document.getElementById('timeInput')
let calculateSpeedBtn = document.getElementById('calculateSpeedBtn')
let speedResult = document.getElementById('speedResult')

calculateSpeedBtn.addEventListener('click', ()=>{
    if(distanceInput.value.length === 0 || timeInput.value.length === 0) {
        speedResult.style.color = 'red';
        speedResult.innerText = 'Введить данні!'
        clearSpan()
        return false
    }
    let distance = +distanceInput.value
    let time = +timeInput.value
    
    if((typeof(distance) === 'number' && !isNaN(distance)) || (typeof(time) === 'number' && !isNaN(time))){
        speedResult.style.color = 'black';
        speedResult.innerText = `Для того, щоб подалати відстань у ${distance} км за ${time} годин\n Ви повинні рухатись зі швидкісттю ${speed(distance, time)} км/г`
    }else{
        circleResult.style.color = 'red';
        clearSpan()
        circleResult.innerText = 'Невірно введені данні'
    }
});


const squareСalculations = length => (length ** 2).toFixed(2)
const perimeterСalculations = length => (length * 4).toFixed(2)
const circleSquare = radius => (3.14 * radius ** 2).toFixed(2)
const circleLeght = radius => (2 * 3.14 * radius).toFixed(2)
const speed = (distance, time) => (distance/time).toFixed(2)

const clearSpan = () => {
    setTimeout(() => {
        result.innerText = ''
        squareResult.innerText = ''
        circleResult.innerText = ''
        speedResult.innerText = ''
    }, 1500);
}

