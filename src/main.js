import './style/style.css'

// elementos html
const digitsBar = document.getElementById('digits')

// variaveis de jogo
var selectedDigit = '-'

// iniciar jogo
function init() {

    for(var i = 1; i <= 9; i++) {

        const digit = document.createElement('span')

        digit.classList.add('digit')
        digit.id = `digit-${i}`

        digit.setAttribute('value', i)
        digit.innerHTML = i

        digit.addEventListener('click', digitClicked)

        digitsBar.appendChild(digit)

    }

}

// clique de um digito
function digitClicked() {

    if(selectedDigit != '-') {

        const digitElement = document.getElementById(`digit-${selectedDigit}`)
        digitElement.classList.remove('pressed-digit')

    }

    const digitValue = this.getAttribute('value')

    selectedDigit = digitValue

    this.classList.add('pressed-digit')

}

init()