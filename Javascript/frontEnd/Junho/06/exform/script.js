function calcularIMC(evento) {
    evento.preventDefault()

    const formulario = document.querySelector('form')

    const dadosForm = new FormData(formulario)

    const valorFoto = dadosForm.get('imagemUsuario')
    const valorAltura = dadosForm.get('alturaUsuario')
    const valorNome = dadosForm.get('nomeUsuario')
    const valorProfissao = dadosForm.get('profissaoUsuario')
    const valorPeso = dadosForm.get('pesoUsuario')

    let imc = valorPeso / (valorAltura**2)

    const displayClassificacao = document.querySelector('#classificaoImc')

    if(imc < 18.5) {
        displayClassificacao.textContent = (`Classificação do IMC: Magreza`)
    } else if (imc < 24.9) {
        displayClassificacao.textContent = (`Classificação do IMC: Normal`)
    } else if (imc < 29.9) {
        displayClassificacao.textContent = (`Classificação do IMC: Sobrepeso`)
    } else if (imc < 39.9) {
        displayClassificacao.textContent = (`Classificação do IMC: Obesidade`)
    } else {
        displayClassificacao.textContent = (`Classificação do IMC: Obesidade Grave`)
    }

    const displayFoto = document.querySelector('img')
    displayFoto.setAttribute('src', `${valorFoto}`)

    const displayNome = document.querySelector('#nomeDisplay')
    displayNome.textContent = (`Nome de Usuário(a): ${valorNome}`)

    const displayAltura = document.querySelector('#alturaDisplay')
    displayAltura.textContent = (`Altura: ${valorAltura}m`)

    const displayPeso = document.querySelector('#pesoDisplay')
    displayPeso.textContent = (`Peso: ${valorPeso} kg`)

    const displayProfissao = document.querySelector('#profissaoDisplay')
    displayProfissao.textContent = (`Profissão: ${valorProfissao}`)
}
