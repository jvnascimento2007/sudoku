import './style/style.css'

// elementos html
const digitsBar = document.getElementById('digits')
const sudokuGame = document.getElementById('sudoku')

// variaveis de jogo
var selectedDigit = '-'

// iniciar jogo
function init() {

    // inicializa os digitos selecionaveis
    for(var i = 1; i <= 9; i++) {

        const digit = document.createElement('span')

        digit.classList.add('digit')
        digit.id = `digit-${i}`

        digit.setAttribute('value', i)
        digit.innerHTML = i

        digit.addEventListener('click', digitClicked)

        digitsBar.appendChild(digit)

    }

    // inicializa as celulas do sudoku
    for(var c = 0; c < 9; c++) {

        for(var r = 0; r < 9; r++) {

            const cell = document.createElement('span')

            cell.classList.add('cell')
            cell.id = `${c}-${r}`

            cell.addEventListener('click', cellClicked)

            sudokuGame.appendChild(cell)

        }

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

// clique de uma célula
function cellClicked(event) {

    if(selectedDigit == '-') return;

    const cell = event.target

    cell.innerHTML = selectedDigit

}

init()