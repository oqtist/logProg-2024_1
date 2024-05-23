let primos = []

function verificaPrimo(num) {
    let primo = true
    for (let i = 0; i < num; i++) {
        if (num % i == 0 && i > 1) {
            primo = false
        }
    }

    if (primo == true) {
        primos.push(num)
    }
}

function primosPrimos(num2) {
    for (let i = num2; i > 0; i--) {
        verificaPrimo(i)
    }
}

let numeroPrompt = Number(prompt('Digite um número para verificar os primos que existem entre ele:'))
primosPrimos(numeroPrompt)

alert(`Os númeos primos entre 0 e ${numeroPrompt} são:\n${primos.sort((a, b) => a - b).join('\n')}`)