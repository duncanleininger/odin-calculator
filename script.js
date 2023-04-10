let currentOpr = null
let num1 = 0
let num2 = 0

const equalBtn = document.getElementById('BtnEquals')
const clearBtn = document.getElementById('BtnAc')
const deleteBtn = document.getElementById('BtnC')
const operatorBtns = document.querySelectorAll('[calc]')
const numberBtns = document.querySelectorAll('[nr]')
const dotBtn = document.getElementById('BtnDot')

const current = document.getElementById('CURRENTscreen')
const last = document.getElementById('LASTscreen')

current.textContent = '0'

equalBtn.addEventListener('click',calculate)
clearBtn.addEventListener('click', clear)
deleteBtn.addEventListener('click', del)
dotBtn.addEventListener('click', addDot)

operatorBtns.forEach((button) => {
    button.addEventListener('click', () => setOperator(button.textContent))
});

numberBtns.forEach((button) => {
    button.addEventListener('click', () => addNr(button.textContent))
});

function setOperator(operator) {
    if (currentOpr !== null) {
        calculate()
    }
    num1 = current.textContent
    currentOpr = operator
    last.textContent = `${num1} ${currentOpr}`
    current.textContent = ''
}

function operate(currentOpr, n, m) {
    m = Number(m)
    if (currentOpr == "+") {
        return add(n, m)
    }
    else if (currentOpr =="-") {
        return subtract(n, m)
    }
    else if (currentOpr =="×") {
        return multiply(n, m)
    }
    else if (currentOpr =="÷") {
        if (m === 0) return null
        else return divide(n, m)
    }
    else if (currentOpr =="%") {
        return modulo(n, m)
    }
}

function add(n, m) {
    return +n + +m
}

function subtract(n, m) {
    return n - m
}

function multiply(n, m) {
    return n * m
}

function divide(n, m) {
    return n / m
}

function modulo(n, m) {
    return n % m
}

function clear() {
    current.textContent = '0'
    last.textContent = ''
    num1 = ''
    num2 = ''
    currentOpr = null
}

function del() {
    if (current.textContent == '0') return
    else
    current.textContent = current.textContent.toString().slice(0, -1)
}

function calculate() {
    num2 = current.textContent
    if (currentOpr == "÷" && num2 == 0) {
        current.textContent = "ERROR"
        return
    }
    else {
    current.textContent = round(operate(currentOpr, num1, num2))
    }
}

function round(number) {
    return Math.round(number * 1000) / 1000
}

function addNr(number) {
    if (current.textContent === '0') {
        clearCurrent()
    }
    current.textContent += number
}

function clearCurrent() {
    current.textContent = ''
}

function addDot() {
    if (current.textContent === '') {
        current.textContent == '0'
    }

    if (current.textContent.includes('.')) {
        return
    }

    current.textContent += '.'
}