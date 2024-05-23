function verificaPrimo(num) {
    let primo = true
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            primo = false
        }
    }

    if (primo == true) {
        alert('O número é primo.')
    } else {
        alert('O número NÃO é primo.')
    }
}

verificaPrimo(Number(prompt('Digite um número para verificar se ele é primo.')))