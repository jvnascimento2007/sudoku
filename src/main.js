import './style/style.css'

// elementos html
const digitsBar = document.getElementById('digits')
const sudokuGame = document.getElementById('sudoku')

// variaveis de jogo
var selectedDigit = '-'

var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

const solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

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
    for(var r = 0; r < 9; r++) {

        for(var c = 0; c < 9; c++) {

            const cell = document.createElement('span')

            cell.classList.add('cell')
            cell.id = `${r}-${c}`

            const cellValue = board[r][c]

            if(cellValue != '-') {
                cell.classList.add('tip-cell')
            }

            cell.innerHTML = (cellValue != '-' )? cellValue : '';

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
    
    const cell = event.target

    if(selectedDigit == '-') return;

    if(cell.classList.contains('tip-cell')) return;

    cell.innerHTML = selectedDigit

}

init()