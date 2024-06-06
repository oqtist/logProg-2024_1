const inputNome = document.querySelector('#id_nome')
const inputIdade = document.querySelector('#id_idade')
const botao = document.querySelector('button')
const paragrafo = document.querySelector('p')

botao.onclick = function () {
    if (inputIdade.value >= 18) {
        paragrafo.textContent = ('Parabéns, sua carteira de motorista está pronta!')
    } else {
        paragrafo.textContent = ('Nada de carro para você agora...')
    }
}