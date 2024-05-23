function parImpar(numero = 0) {
    if(numero % 2 == 0) {
        alert('O número é par.')
    } else {
        alert('O número é ímpar.')
    }
}

parImpar(Number(prompt('Digite um número para verificar se ele é par ou ímpar:')))
