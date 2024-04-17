function ex1() {
    let numero = document.getElementById('ex1')

    let cont = 0

    while (cont < 10) {
        cont++
        numero.innerHTML += (`${cont}<br>`)
    }
}

function ex2() {
    let anoDisplay = document.getElementById('ex2')

    let popA = 80000, popB = 200000
    let taxaA = 1.03, taxaB = 1.015
    let anos = 0

    while (popA <= popB) {
        popA *= taxaA
        popB *= taxaB
        anos++
    }

    anoDisplay.innerHTML = (`Serão necessários ${anos} anos para a população A superar a população B.<hr>População A:${popA.toFixed(2)}<br>População B:${popB.toFixed(2)}`)

}

function ex3() {
    let nomeDisplay = document.getElementById('ex3nome')
    let caroDisplay = document.getElementById('ex3caro')
    let baratoDisplay = document.getElementById('ex3barato')
    let totalDisplay = document.getElementById('ex3total')
    let qtdJogosDisplay = document.getElementById('ex3qtdJogos')

    let dinheiro = 2000
    let nome, valor
    //extras
    let soma = 0, caro = 0, barato = 0
    let cont = 0
    let cancelar = 0
    let caroNome, baratoNome

    while (soma < 2000 && cancelar != 1) {
        nome = prompt('Digite o nome do jogo:')
        valor = Number(prompt('Digite o valor do jogo:'))
        if (valor <= 2000 && cancelar != 1) {
            dinheiro -= valor
            soma += valor
            cont++
            if (soma >= 2000) {
                soma -= valor
                cont--
                cancelar = 1
            } else {
                nomeDisplay.innerHTML += (`<li>${nome} - R$${valor}</li><br>`)
            }
            if (valor > caro) {
                caro = valor
                caroNome = nome
            }
            if (valor < barato || cont == 0) {
                barato = valor
                baratoNome = nome
            }
        } else {
            cancelar = 1
        }
        if (valor == 0) {
            cancelar = 1
        }
    }
    totalDisplay.innerHTML = (`O total gasto foi de R$${soma}.`)
    qtdJogosDisplay.innerHTML = (`Foram comprados ${cont} jogos no total.`)
    caroDisplay.innerHTML = (`O jogo mais caro (${caroNome}) custou R$${caro}.`)
    baratoDisplay.innerHTML = (`O jogo mais barato (${baratoNome}) custou R$${barato}.`)

}

function ex4_1() {
    let primoDisplay = document.getElementById('ex4Primo')

    let primo = Number(prompt('Digite um número:'))
    let contPrimo = 2
    let primoBool = true

    while (contPrimo < primo) {
        if (primo % contPrimo == 0) {
            primoBool = false
        }
        contPrimo++
    }

    if (primoBool) {
        primoDisplay.innerHTML = (`O número ${primo} é primo.`)
    } else {
        primoDisplay.innerHTML = (`O número ${primo} não é primo.`)
    }

    contPrimo = 2
}
function ex4_2() {
    let primo1 = document.getElementById('ex4_2_1')
    let primo2 = document.getElementById('ex4_2_2')
    let primo3 = document.getElementById('ex4_2_3')
    let primo4 = document.getElementById('ex4_2_4')
    let primo5 = document.getElementById('ex4_2_5')

    let n1 = Number(prompt('Digite o 1° número:'))
    let n2 = Number(prompt('Digite o 2° número:'))
    let n3 = Number(prompt('Digite o 3° número:'))
    let n4 = Number(prompt('Digite o 4° número:'))
    let n5 = Number(prompt('Digite o 5° número:'))
    let contPrimo = 2
    let primoBool = true

    while (contPrimo < n1) {
        if (n1 % contPrimo == 0) {
            primoBool = false
        }
        contPrimo++
    }
    if (primoBool) {
        primo1.innerHTML = (`O número ${n1} é primo`)
    } else {
        primo1.innerHTML = (`O número ${n1} não é primo`)
    }
    contPrimo = 2
    primoBool = true

    while (contPrimo < n2) {
        if (n2 % contPrimo == 0) {
            primoBool = false
        }
        contPrimo++
    }
    if (primoBool) {
        primo2.innerHTML = (`O número ${n2} é primo`)
    } else {
        primo2.innerHTML = (`O número ${n2} não é primo`)
    }
    contPrimo = 2
    primoBool = true

    while (contPrimo < n3) {
        if (n3 % contPrimo == 0) {
            primoBool = false
        }
        contPrimo++
    }
    if (primoBool) {
        primo3.innerHTML = (`O número ${n3} é primo`)
    } else {
        primo3.innerHTML = (`O número ${n3} não é primo`)
    }
    contPrimo = 2
    primoBool = true

    while (contPrimo < n4) {
        if (n4 % contPrimo == 0) {
            primoBool = false
        }
        contPrimo++
    }
    if (primoBool) {
        primo4.innerHTML = (`O número ${n4} é primo`)
    } else {
        primo4.innerHTML = (`O número ${n4} não é primo`)
    }
    contPrimo = 2
    primoBool = true

    while (contPrimo < n5) {
        if (n5 % contPrimo == 0) {
            primoBool = false
        }
        contPrimo++
    }
    if (primoBool) {
        primo5.innerHTML = (`O número ${n5} é primo`)
    } else {
        primo5.innerHTML = (`O número ${n5} não é primo`)
    }
    contPrimo = 2
    primoBool = true

}

function ex5() {
    let duracaoDisplay = document.getElementById('ex5duracao')

    let cancelar = 0
    let somaDuracao = 0
    let horas = 0
    let duracaoMusica

    while (cancelar != 1) {
        prompt('Escreva o nome da música:')
        duracaoMusica = Number(prompt('Digite a duração da música: (em minutos)'))
        if (duracaoMusica != '') {
            somaDuracao += duracaoMusica
        } else {
            cancelar = 1
        }
    }
    if (somaDuracao >= 60) {
        horas = parseInt(somaDuracao / 60)
        somaDuracao -= (horas * 60)
        duracaoDisplay.innerHTML = (`A duração total da playlist é de ${horas}h ${somaDuracao}m.`)
    } else {
        duracaoDisplay.innerHTML = (`A duração total da playlist é de ${somaDuracao}m.`)
    }
}

function ex6() {
    let resultado = document.getElementById('ex6')

    let numAleatorio = (Math.random() * 100)
    let tentativas = 10
    let guess = 0
    let parar = 0

    while (tentativas > 0 && parar == 0) {
        numAleatorio.toFixed(0)
        guess = Number(prompt(`Tente adivinhar o número!\nVocê tem ${tentativas} tentativas restantes.`))

        if (guess == numAleatorio.toFixed(0)) {
            resultado.innerHTML = (`Você acertou!<br>O número era ${numAleatorio.toFixed(0)}.\n\nRestaram ${tentativas} tentativas.`)
            parar = 1
        } else if (guess > numAleatorio.toFixed(0)) {
            tentativas--
            alert(`Seu número foi maior que o número aleatório.`)
        } else if (guess < numAleatorio.toFixed(0)) {
            tentativas--
            alert(`Seu número foi menor que o número aleatório.`)
        }
    }
    if (tentativas == 0) {
        resultado.innerHTML = (`Você ficou sem tentativas.\nO número aleatório era ${numAleatorio.toFixed(0)}.`)
    }
}

function ex7() {
    let notaDisplay = document.getElementById('ex7')

    let nota = 0, notaFinal = 0, maior = 0, menor = 0
    let cont = 0
    let sub

    while (cont < 5) {
        nota = Number(prompt('Por favor, digite a nota dos juízes em sequência.\nLembre-se de que as notas devem ter valor de 0 a 10 para serem válidas.'))
        if(nota > 0 && nota <= 10) {
            if (nota > maior) {
                maior = nota
            }
            if (nota < menor || cont == 0) {
                menor = nota
            }
            notaFinal += nota
            cont++
        } else {
            alert('Nota inválida!\nPor favor, tente novamente!')
        }
    }
    sub = (maior + menor)
    notaFinal -= sub
    notaDisplay.innerHTML = (`A nota final dos juízes foi ${notaFinal}!<br>A média das notas foi ${(notaFinal / 3).toFixed(1)}!`)
}

function ex8() {
    let resultado = document.getElementById('ex8')

    let num, soma = 0, cont = 0

    num = Number(prompt('Digite números inteiros e positivos:'))
    if(num > 0) {
        soma += num
        cont++
        while (num > 0) {
            num = Number(prompt('Digite números inteiros e positivos:'))
            if(num > 0) {
                soma += num
                cont++
            } else {
                alert('Número Inválido.')
                resultado.innerHTML = (`A média dos números inteiros e positivos é ${(soma / cont).toFixed(2)}`)
            }
        }
    } else {
        alert('Número Inválido.')
        resultado.innerHTML = (`Não foram inseridos números inteiros e positivos...`)
    }
}