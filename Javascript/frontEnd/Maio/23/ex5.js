let idades = []

while (idades.length < 5) {
    idades.push(Number(prompt(`Digite a ${idades.length + 1}ª idade:`)))
}

let maioridade = idades.every((maioridade) => maioridade >= 18)

if (maioridade == true) {
    alert('Todos na lista são maiores de idade.')
} else {
    alert('Nem todos na lista são maiores de idade.')
}

