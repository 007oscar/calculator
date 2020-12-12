
const botones = document.querySelector('.container');
const display = document.querySelector('.display');
let stack = [];
let num = ''
botones.addEventListener('click', (event) => {
    const el = event.target.innerText
    console.log(el)
    if (isNaN(parseInt(el))) {
        console.log('no es numero')
        if (el === 'C') {
            display.innerText = '0'
            stack = []
        } else if (el === '←') {
            
            if (display.innerText.length > 1) {
                display.innerText = display.innerText.substring(0, display.innerText.length - 1)
            }
            else display.innerText = '0'
            num = display.innerText

        } else if (el === '=') {
            try {
                const valor1 = stack[0]
                const op = stack[1]
                const valor2 = display.innerText
                console.log(valor1, op, valor2)
                display.innerText = new String(calcular(valor1, op, valor2))
                stack = []
                num = display.innerText
                console.log(stack)
            } catch {
                display.innerText = 'ERROR..'
            }
        } else {
            stack.push(num)
            stack.push(el)
            display.innerText = '0'
            console.log(stack, el,'<<<<<')
        }

    } else {
        num = displayNumber(el)       
        // stack.push(el)
        console.log(stack, '====')
    }

})
function displayNumber(number) {
    if (display.innerText === '0') {
        display.innerText = ''
    }
    display.innerText += number
    return display.innerText
}
function calcular(valor1, op, valor2) {
    switch (op) {
        case '⨉':
            console.log(parseInt(valor1) * parseInt(valor2))
            return parseInt(valor1) * parseInt(valor2)
            break
        case '+':
            return parseInt(valor1) + parseInt(valor2)
        case '−':
            return parseInt(valor1) - parseInt(valor2)
        case '÷':
            return parseInt(valor1) / parseInt(valor2)
        default:
            return '0'
    }
}