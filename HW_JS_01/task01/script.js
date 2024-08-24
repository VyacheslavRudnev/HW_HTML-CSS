let name = prompt("Введіть Ваше ім'я?")
alert(`Привіт, ${name}!`)

let length

while (true) {

    length = prompt('Введіть довжину сторони квадрату, см?')

    if (length === null) { 
        alert("Введення скасовано.")
        break
    }

    length = length.replace(',', '.')

    length = Number(length)

    if (isNaN(length) || length <= 0) {
        alert("Будь ласка, введіть правильне числове значення для довжини сторони квадрату.")
    }
    else {
        const square = length => (length ** 2).toFixed(2)
        const perimeter = length => (length * 4).toFixed(2)
    
        alert(`Для квадрату зі стороною ${length} см\nПериметр = ${perimeter(length)} см\nПлоща = ${square(length)} см²`)
        break
    }
}

let radius
while (true) {
    radius = prompt('Введіть радіус кола, см?')
    
    if (radius === null) { 
        alert("Введення скасовано.")
        break
    }
    radius = radius.replace(',', '.')

    length = Number(radius)

    if (isNaN(radius) || radius <= 0) {
        alert("Будь ласка, введіть правильне числове значення.")
    }
    else {
        const circleSquare = radius => (3.14 * radius ** 2).toFixed(2)
        const circleLeght = radius => (2 * 3.14 * radius).toFixed(2)
    
        alert(`Для кола радіусом ${radius} см\nПлоща = ${circleSquare(radius)} см²\nДовжина кола = ${circleLeght(radius)} см`)
        break
    }
}

let distance
let time

while (true) {
    distance = prompt('Відстань між двома містами, км?')
    time = prompt('За який час ви хочете подалати цю відстань, г?')
    
    if (distance === null || time === null) { 
        alert("Введення скасовано.")
        break
    }
    distance = distance.replace(',', '.')
    time = time.replace(',', '.')

    distance = Number(distance)
    time = Number(time)


    if (isNaN(distance) || distance <= 0 || isNaN(time) || time <= 0) {
        alert("Будь ласка, введіть правильне числове значення.")
    }
    else {
        const speed = (distance/time).toFixed(2)
        
    
        alert(`Для того, щоб подалати відстань у ${distance} км за ${time} годин\n Ви повинні рухатись зі швидкісттю ${speed} км/г`)
        break
    }
}


