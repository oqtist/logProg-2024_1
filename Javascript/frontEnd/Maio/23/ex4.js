let inscricoes = []

while (inscricoes.length < 10) {
    inscricoes.push(Number(prompt(`Digite o seu número de inscrição:`)))
}

let timePares = inscricoes.filter((inscricoes) => inscricoes % 2 == 0)
let timeImpares = inscricoes.filter((inscricoes) => inscricoes % 2 != 0)

if (timeImpares.length == timePares.length) {
    alert(`Os times estão balanceados (Ambos com 5 jogadores cada.)`)
} else {
    alert(`Os times estão desbalanceados.\nTime Par: ${timePares.length} jogadores.\nTime Ímpar: ${timeImpares.length} jogadores.`)
}