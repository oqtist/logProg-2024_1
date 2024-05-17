let parar = false
let metade1 = []
let metade2 = []
let soma = 0
let soma1 = 0
let soma2 = 0

let dispSoma = document.getElementById('displaySoma')

while (parar == false) {
    if (metade1.length < 5) {
        let n = (Number(prompt('Digite um número inteiro e positivo:')))
        if (n > 0) {
            metade1.push(n)
        } else {
            alert('Número Inválido.')
        }
    } else {
        let n = (Number(prompt('Digite um número inteiro e positivo:')))
        if (n > 0) {
            metade2.push(n)
        } else {
            alert('Número Inválido.')
        }
    }
    if (metade2.length >= 5) {
        parar = true
    }
}

for (i = 0; i < 5; i++) {
    soma1 += metade1[i]
    soma2 += metade2[i]
    soma = soma1 - soma2
}

dispSoma.innerHTML = (`Soma da primeira metade - Soma da segunda metade = ${soma}`)

console.log(soma);