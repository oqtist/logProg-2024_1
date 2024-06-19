const formulario = document.querySelector('form')
const pMensagem = document.querySelector('#mensagens')
const pContador = document.querySelector('#contador')
const inputTexto = document.querySelector('#mensagem')

let cont = 0

function enviar(evento) {
    evento.preventDefault()
    cont++

    const dados = new FormData(formulario)
    const mensagem = dados.get('mensagens')

    pMensagem.innerHTML += (`Usuário: ${mensagem}<br>`)
    pContador.textContent = (`Mensagens Enviadas: ${cont}`)
}