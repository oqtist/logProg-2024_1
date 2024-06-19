const paragrafo = document.querySelector('p')
const botao = document.querySelector('button')

botao.onclick = () => {
    paragrafo.classList.toggle('oculta');
}