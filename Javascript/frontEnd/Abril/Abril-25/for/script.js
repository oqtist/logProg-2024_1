function ex1() {
    let somaDisplay = document.getElementById('ex1-soma')

    let num, soma = 0

    for (let cont = 0; cont < 5; cont++) {
        num = Number(prompt('Digite um número\nSe ele for maior que sete, será adicionado a uma soma no final:'))
        if (num > 7) {
            soma += num
        }
    }
    somaDisplay.innerHTML = (`A soma dos números superiores a sete é ${soma}.`)
}

function ex2() {
    for (let num = 1; num < 202; num++) {
        if (num % 2 == 0) {
            console.log(num)
        }
    }
}

function ex3() {
    let somaDisplay = document.getElementById('ex3-soma')

    let soma = 0

    for (let num = 10; num < 21; num++) {
        soma += num
        somaDisplay.innerHTML = (`A soma dos números entre 10 e 20 é ${soma}.`)
    }

}

function ex4() {
    let num = Number(prompt('Digite um número:'))
    let soma = 0

    for (let cont = 0; cont <= num; cont++) {
        soma += cont
    }
    alert(`A soma de 0 a ${num} resulta em ${soma}.`)
}

function ex5() {
    let display = document.getElementById('ex5-display')
    let golDisplay = document.getElementById('ex5-gol')
    let regular = document.getElementById('ex5-regularidade')

    let numMultas = Number(prompt('Digite a quantidade de multas:'))
    let valorMultas = 0
    let pontos = 0

    for (cont = 0; cont < numMultas; cont++) {
        valorMultas += Number(prompt(`Digite o valor da multa:`))
        pontos += Number(prompt(`Digite a quantidade de pontos desta multa:`))
    }

    display.innerHTML = (`Total das multas: R$${valorMultas}<br>Total de pontos: ${pontos}`)

    if (pontos >= 21) {
        regular.innerHTML = (`Você está irregular.`)
    } else {
        regular.innerHTML = (`Você está regular.`)
    }

    if (valorMultas >= 5000) {
        let gols = valorMultas / 5000
        golDisplay.innerHTML = (`Com o valor de suas multas, você poderia comprar ${gols} Gol(s) 1980.`)
    }
}

function ex6() {
    let soma = 0, num, display = document.getElementById('ex6-display')

    for (let cont = 0; cont < 5; cont++) {
        num = Number(prompt('Digite 5 números pares.'))
        if (num % 2 == 0) {
            soma += num
            display.innerHTML = (`A média dos números pares é ${soma / 5}`)
        } else {
            alert('O número digitado não era par.')
            display.innerHTML = ('')
            break
        }
    }
}