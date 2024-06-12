//===========================================================//

function corParagrafo() {
    const paragrafo = document.querySelector('p')
    const botao = document.querySelector('button')

    paragrafo.textContent = "Estou verde.."
    paragrafo.style.color = 'green'
    botao.textContent = ">:]"
}

//===========================================================//

const quadrado = document.querySelector('#quadradoPrismatico')

quadrado.onclick = () => {
    quadrado.style.backgroundColor = 'gold'
}

quadrado.onmouseover = () => {
    quadrado.style.backgroundColor = 'darkgreen'
}

quadrado.onmouseleave = () => {
    quadrado.style.backgroundColor = 'midnightblue'
}

//===========================================================//

const inputFonte = document.querySelector('#id_fonteTexto')
const inputCorTexto = document.querySelector('#id_corTexto')
const inputCor = document.querySelector('#id_corBody')

const body = document.querySelector('body')

inputCor.oninput = () => {
    body.style.backgroundColor = (`${inputCor.value}`)
}

inputCorTexto.oninput = () => {
    body.style.color = (`${inputCorTexto.value}`)
}

inputFonte.oninput = () => {
    body.style.fontFamily = (`${inputFonte.value}`)
}

//===========================================================//