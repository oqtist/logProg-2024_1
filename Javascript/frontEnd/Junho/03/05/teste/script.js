let inputIdade = document.querySelector('#id_idade')
let inputNome = document.querySelector('#id_nome')
let botao = document.querySelector('button')

botao.onclick = function() {
    alert(`Olá, ${inputNome.value} (${inputIdade.value} anos).`)
}
