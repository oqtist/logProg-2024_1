const botao = document.querySelector('#botao-1')
const div = document.querySelector('#me-esconda-haha')

const fechar = document.querySelector('#botao-x')

botao.onclick = function() {
    div.classList.toggle('oculta');
    botao.classList.toggle('oculta');
}

fechar.onclick = function() {
    div.classList.toggle('oculta');
    botao.classList.toggle('oculta');
}