function onChange(evento) {
    alert(`Você digitou ${evento.target.value}.`)
}

let contador = 0
let recorde = 0
const paragrafo = document.querySelector('p')

function clicker() {
    contador++
    if(contador > recorde) {
        recorde = contador
    }
    paragrafo.textContent = (`Você clicou ${contador} vezes no botão! O recorde atual é ${recorde}!`)
}

function limparClicker() {
    contador = 0
    paragrafo.textContent = (`Você reiniciou o contador.. O recorde atual é ${recorde}!`)
}


function pinkieZone() {
    alert('Você está na "Zona Pinkie".')
}

function pinkieUnzone() {
    alert('Você saiu da "Zona Pinkie".')
}