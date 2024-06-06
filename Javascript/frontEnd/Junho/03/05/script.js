let paragrafo = document.querySelector("p")
let botao = document.querySelector("button")

botao.onclick = () => {
    if (paragrafo.textContent == ":(") {
        paragrafo.textContent = ":)"
    } else {
        paragrafo.textContent = ":("
    }
}