const paragrafo = document.querySelector('p')
let contadorArmazenado = localStorage.getItem('contador')

if (contadorArmazenado) {
    contadorArmazenado++
} else {
    contadorArmazenado = 1
}

localStorage.setItem('contador', contadorArmazenado)
paragrafo.innerHTML = (`Contagem de visitas: ${contadorArmazenado}`)

//========================================================//

function limparContador() {
    localStorage.clear()
}