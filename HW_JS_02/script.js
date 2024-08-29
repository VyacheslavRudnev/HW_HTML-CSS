// конвертер
let lengthInput = document.getElementById('lengthInput')
let convertBtn = document.getElementById('convertBtn')
let convertResult = document.getElementById('convertResult')

convertBtn.addEventListener('click', ()=>{
    if(lengthInput.value.length === 0) {
        convertResult.style.color = 'red';
        convertResult.innerHTML = "Введить число!"
        clearSpan()
        return false
    }
    let length = +lengthInput.value
    
    if(typeof(length) === 'number' && !isNaN(length)){
        convertResult.style.color = 'black';
        convertResult.innerHTML = `Відстань ${length} км = ${KmToMlConverter(length)} миль`
    }else{
        convertResult.style.color = 'red';
        clearSpan()
        convertResult.innerHTML = 'Невірно введені данні'
    }
})

// Калькулятор
let firstNumberInput = document.getElementById('firstNumberInput')
let secondNumberInput = document.getElementById('secondNumberInput')
let calculateResult = document.getElementById('calculateResult')

const calculate = (operation) => {
    let firstNumber = parseFloat(firstNumberInput.value)
    let secondNumber = parseFloat(secondNumberInput.value)
    let result;

    if((firstNumberInput.value.length === 0) || (secondNumberInput.value.length === 0)) {
        calculateResult.style.color = 'red';
        calculateResult.innerHTML = "Введить число!"
        clearSpan()
        return false
    }

    if((typeof(firstNumber) === 'number' && !isNaN(firstNumber)) && (typeof(secondNumber) === 'number' && !isNaN(secondNumber))) {

        switch(operation) {
            case 'multiply':
                result = firstNumber * secondNumber
                break
            case 'divide':
                if (secondNumber === 0) {
                    calculateResult.style.color = 'red'
                    calculateResult.textContent = 'Ділення на 0 неможливе.'
                    return
                }
                result = firstNumber / secondNumber
                break
            case 'add':
                result = firstNumber + secondNumber
                break
            case 'subtract':
                result = firstNumber - secondNumber
                break
        }
        calculateResult.style.color = 'black'
        calculateResult.innerHTML = 'Результат: ' + result
    }else{
        calculateResult.style.color = 'red';
        clearSpan()
        calculateResult.innerHTML = 'Невірно введені данні'
    }
}

document.getElementById('multiply').addEventListener('click', () => calculate('multiply'))
document.getElementById('divide').addEventListener('click', () => calculate('divide'))
document.getElementById('add').addEventListener('click', () => calculate('add'))
document.getElementById('subtract').addEventListener('click', () => calculate('subtract'))

document.getElementById('clear').addEventListener('click', () => {
    firstNumberInput.value = ''
    secondNumberInput.value = ''
    calculateResult.textContent = ''
})



// Визначення віку
let ageInput = document.getElementById('ageInput')
let calculateAgeBtn = document.getElementById('calculateAgeBtn')
let ageResult = document.getElementById('ageResult')

calculateAgeBtn.addEventListener('click', ()=>{
    if(ageInput.value.length === 0) {
        ageResult.style.color = 'red'
        ageResult.innerHTML = 'Введить данні!'
        clearSpan()
        return false
    }
    let age = +ageInput.value
    
    if(typeof(age) === 'number' && !isNaN(age)){
        ageResult.style.color = 'black'
        AgeCalculate(age)
    }else{
        ageResult.style.color = 'red'
        clearSpan()
        ageResult.innerText = 'Невірно введені данні'
    }
})

const KmToMlConverter = (length) => {
    const km = 0.621371
    return (length * km).toFixed(2)
}
const AgeCalculate = (age) => {
    if(age < 0){
        ageResult.style.color = 'red'
        ageResult.innerHTML = 'Введить коректні данні!'
    }
    else if(age >= 0 && age < 12)
        ageResult.innerText = `Ви дитина`
    else if(age >= 12 && age < 18)
        ageResult.innerText = `Ви підліток`
    else if(age >= 18 && age < 60)
        ageResult.innerText = `Ви дорослий`
    else if(age >= 60)
        ageResult.innerText = `Ви пенсіонер`

}


const clearSpan = () => {
    setTimeout(() => {
        convertResult.innerText = ''
        calculateResult.innerText = ''
        ageResult.innerText = ''
    }, 1500);
}
