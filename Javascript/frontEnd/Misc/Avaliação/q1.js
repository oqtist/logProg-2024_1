const botao = document.querySelector('#mostrarPolitica')
const paragrafo = document.querySelector('#texto')

botao.onclick = () => {
    paragrafo.innerHTML = ('Políticas da Empresa:<br>1- Não há políticas')
}
