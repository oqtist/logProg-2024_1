let listaVIP = []

const paragrafo = document.querySelector('#paragrafo-nomes')

function enviar() {
    const nome = document.querySelector('#id-nomes').value
    const getLista = localStorage.getItem('nomes')

    if(getLista) {
        listaVIP = JSON.parse(localStorage.getItem('nomes'))
    }
    
    listaVIP.push(nome)
    const listaConvertida = JSON.stringify(listaVIP)
    localStorage.setItem('nomes', listaConvertida)
    
    paragrafo.innerHTML = (`<li>${listaVIP.join('<li>')}`)
}

function buscar() {
    const listaRecuperada = JSON.parse(localStorage.getItem('nomes'))
    paragrafo.innerHTML = (`<li>${listaRecuperada.join('<li>')}`)
}

function retirar() {
    const valor = parseInt(document.querySelector('#id-remover-nomes').value)
    const getLista = localStorage.getItem('nomes')

    if(getLista) {
        listaVIP = JSON.parse(localStorage.getItem('nomes'))
    }
    
    listaVIP.splice((valor - 1), 1)
    const listaConvertida = JSON.stringify(listaVIP)
    localStorage.setItem('nomes', listaConvertida)
    
    paragrafo.innerHTML = (`<li>${listaVIP.join('<li>')}`)

    if(paragrafo.innerHTML == (`<li></li>`)) {
        paragrafo.innerHTML = ('')
    }
}