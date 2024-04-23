let guess, numero, tentativas
let resultado = document.getElementById('resultado')

numero = parseInt(Math.random() * 100)
console.log(numero)

for(tentativas = 1; tentativas < 11; tentativas++) {
    guess = Number(prompt(`Tente adivinhar o número mágico.\nVocê tem ${11 - tentativas} tentativas.`))
    if (guess > numero) {
        alert(`Seu número excedeu o número aleatório.`)
    } else if (guess < numero) {
        alert(`Seu número foi excedido pelo número aleatório.`)
    } else {
        resultado.innerHTML = (`Você acertou o número aleatório!<br>O número era ${numero}.<br><br>Você precisou de ${(1 + tentativas)} tentativa(s).`)
        break
    }
}
if (tentativas > 10) {
    resultado.innerHTML = (`Você ficou sem tentativas.\nO número era ${numero}.`)
}
