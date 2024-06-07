function enviarFormulario(eventoRecebido) {
    eventoRecebido.preventDefault()

    const formulario = document.querySelector('form')

    const dadosFormulario = new FormData(formulario)
//busca pelo name="***"
    const valorNome = dadosFormulario.get('nome_usuario')
    const valorEmail = dadosFormulario.get('email_usuario')
    const valorMensagem = dadosFormulario.get('mensagem_usuario')

    alert(`Os valores digitados foram:\nNome: ${valorNome}\nE-Mail: ${valorEmail}\nMensagem: ${valorMensagem}`)
}