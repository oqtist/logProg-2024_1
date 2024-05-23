function somar(num1 = 0, num2 = 0) {
    let resultado = num1 + num2
    alert(`A soma de ${num1} e ${num2} resulta em ${resultado}.`)
}

function subtracao(num1 = 0, num2 = 0) {
    let resultado = num1 - num2
    alert(`A diferença entre ${num1} e ${num2} resulta em ${resultado}.`)
}

function multiplicacao(num1 = 0, num2 = 0) {
    let resultado = num1 * num2
    alert(`O produto de ${num1} e ${num2} resulta em ${resultado} `)
}

function divisao(num1 = 0, num2) {
    if (num2 == 0) {
        alert('O resultado é infinito.')
    } else {
        let resultado = num1 / num2
        alert(`A divisão de ${num1} por ${num2} resulta em ${resultado.toFixed(2)}`)
    }
}

let opcao = Number(prompt('====== CALCULADORA ======\n\n1) Soma\n2) Subtração\n3) Multiplicação\n4) Divisão'))
switch(opcao) {
    case 1:
        somar(prompt('Digite o primeiro número:'), prompt('Digite o segundo número:'))
        break
    case 2:
        subtracao(prompt('Digite o primeiro número:'), prompt('Digite o segundo número:'))
        break
    case 3:
        multiplicacao(prompt('Digite o primeiro número:'), prompt('Digite o segundo número:'))
        break
    case 4:
        divisao(prompt('Digite o primeiro número:'), prompt('Digite o segundo número:'))
        break
    default:
        alert('Opção Inválida.')
}