mostrarMensagem()

// hoisting (exc func)
function mostrarMensagem() {
    alert('Seja Bem-vindo ao Sistema.')
}

function somar(numero1 = 0, numero2 = 0) {
    let soma = numero1 + numero2
    return soma
}

let resultado = somar(Number(prompt('1:')), Number(prompt('2:')))
alert(`O resultado da soma foi ${resultado}.`)

let resultado2 = somar(5)
alert(`${resultado2}`)