//================================================================//

let diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']

console.log(diasDaSemana);

diasDaSemana.push('Feriado')
console.log(diasDaSemana);

diasDaSemana.pop()
console.log(diasDaSemana);

//================================================================//

let numerosPares = []

for (i = 0; i < 21; i++) {
    if (i % 2 == 0) {
        numerosPares.push(i)
    }
}
console.log(numerosPares);

numerosPares.splice(2, 1, numerosPares[6])
console.log(numerosPares);

//================================================================//

let frutas = ['banana', 'maçã', 'uva']
frutas.push('morango')
console.log(frutas);

frutas.splice(1, 1)
console.log(frutas);

//================================================================//

let nomes1 = ['Alice', 'Bob', 'Charlie']
let nomes2 = ['Dave', 'Eva', 'Frank']
let nomes3 = nomes1.concat(nomes2)

console.log(nomes3)

let idades = [25, 30, 28, 22, 26, 24]

console.log(`${idades[0] + idades[1]}`)

//================================================================//

let soma = 0

for (i = 0; i < idades.length; i++) {
    soma += idades[i]
}

let media = soma / idades.length
console.log(media)

//================================================================//

let compras = ['Maçãs', 'Pão', 'Leite']
console.log(compras)

compras.push('Ovos', 'Arroz')
console.log(compras);

compras.splice(2, 1)
console.log(compras);

let paoExiste
if (compras.indexOf('Pão') != -1) {
    paoExiste = true
} else {
    paoExiste = false
}
console.log(paoExiste)

//================================================================//

let impares = []

for (i = 1; i < 10; i += 2) {
    impares.push(i)
}
console.log(impares)

for (i = 0; i < impares.length; i++) {
    impares.splice(i, 1, (impares[i] * 2))
}
console.log(impares);

//================================================================//

let cidades = ['o Cairo', 'Londres', 'Nápoles']

console.log(`Eu adoraria visitar ${cidades[1]} e ${cidades[2]}.`);

//================================================================//

let arrayDisp = document.getElementById('arrayDisplay')
let somaDisp = document.getElementById('somaValores')

let array = []

for (i = 0; i < 25; i++) {
    array.push(parseInt(Math.ceil(Math.random() * 100)))
}

let n1 = -1, n2 = -1

while (n1 < 0 || n1 > 24) {
    n1 = Number(prompt('Digite a primeira posição (de 0 a 24) a ser encontrada:'))
    if (n1 >= 0 && n1 <= 24) {
        alert(`O valor da posição ${n1} é ${array[n1]}.`)
    } else {
        alert('Posição Inválida.')
    }
}

while (n2 < 0 || n2 > 24) {
    n2 = Number(prompt('Digite a segunda posição (de 0 a 24) a ser encontrada:'))
    if (n2 >= 0 && n2 <= 24) {
        alert(`O valor da posição ${n2} é ${array[n2]}.`)
    } else {
        alert('Posição Inválida.')
    }
}

somaDisp.innerHTML = (`A soma dos valores nas posições ${n1} e ${n2} é ${array[n1] + array[n2]}`)

function busca() {
    let existe = Number(prompt('Digite um número para saber se ele existe no vetor:'))
    if (array.indexOf(existe) != -1) {
        alert(`O valor está presente no array na posição ${(array.indexOf(existe))}.`)
    } else {
        alert(`O valor não existe no array.`)
    }
}

for (i = 0; i < array.length; i++) {
    arrayDisp.innerHTML += (`Posição ${i}: ${array[i]}<br>`)
}

//================================================================//