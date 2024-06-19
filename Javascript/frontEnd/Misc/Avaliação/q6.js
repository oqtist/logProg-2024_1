function somar(evento) {
    evento.preventDefault()

    const paragrafo = document.querySelector('#resultadoSoma')

    const n1 = document.querySelector('#numero1')
    const n2 = document.querySelector('#numero2')

    let soma = Number(n1.value) + Number(n2.value)
    paragrafo.textContent = (`A soma de ${n1.value} e ${n2.value} resulta em ${soma}.`)
}