//================================================================//

let diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']

console.log(diasDaSemana);

diasDaSemana.push('Feriado')
console.log(diasDaSemana);

diasDaSemana.pop()
console.log(diasDaSemana);

//================================================================//

let numerosPares = []

for(i=0;i<21;i++) {
    if(i % 2 == 0) {
        numerosPares.push(i)
    }
}
console.log(numerosPares);

numerosPares.splice(2,1,numerosPares[6])
console.log(numerosPares);

//================================================================//

let frutas = ['banana', 'maçã', 'uva']
frutas.push('morango')
console.log(frutas);

frutas.splice(1,1)
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

for(i = 0;i<idades.length;i++) {
    soma += idades[i]
}

let media = soma / idades.length
console.log(media)

//================================================================//

let compras = ['Maçãs', 'Pão', 'Leite']
console.log(compras)

compras.push('Ovos', 'Arroz')
console.log(compras);

compras.splice(2,1)
console.log(compras);

let paoExiste
if(compras.indexOf('Pão') != -1) {
    paoExiste = true
} else {
    paoExiste = false
}
console.log(paoExiste)

//================================================================//

let impares = []

for(i=1;i<10;i+=2) {
    impares.push(i)
}
console.log(impares)

for(i=0;i<impares.length;i++) {
    impares.splice(i, 1, (impares[i] * 2))
}
console.log(impares);

//================================================================//

let cidades = ['Paris', 'Londres', 'Nápoles']

console.log(`Eu adoraria visitar ${cidades[1]} e ${cidades[2]}.`);

//================================================================//
