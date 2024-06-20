function enviar(evento) {
    evento.preventDefault()

    const serieArmazenada = localStorage.getItem('serie')
    const serieDigitada = document.querySelector('#id-serie').value
    const label = document.querySelector('label')

    if (serieArmazenada) {
        label.innerHTML = (`De qual outra série gosta além de ${serieArmazenada}?`)
    } else {
        label.innerHTML = ('Qual é sua série favorita?')
    }

    localStorage.setItem('serie', serieDigitada)
}