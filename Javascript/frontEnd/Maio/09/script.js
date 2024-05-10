function ex1() {
    let notas = []
    let maior
    let menor
    let soma = 0
    let num

    let media = document.getElementById('media')

    for (i = 0; i < 6; i++) {
        num = Number(prompt('Digite uma nota: '))
        notas.push(num)
        soma += num
        console.log(maior)
        if (i == 0) {
            maior = num
            menor = num
        }
        if (num > maior) {
            maior = num
        }
        if (num < menor) {
            menor = num
        }
    }

    soma -= (maior + menor)
    soma /= notas.length

    media.innerHTML = (`A média das notas é ${soma.toFixed(1)}.`)
}

function ex2() {
    let impares = []
    let soma = 0
    let arrayDisp = document.getElementById('array')

    for (i = 0; i < 5; i++) {
        let num = Number(prompt('Digite um número:'))
        if (num % 2 != 0) {
            impares.push(num)
            soma += num
        }
        arrayDisp.innerHTML = (`Os números ímpares digitados foram: ${impares}.<br>A soma deles resulta em ${soma}.`)
    }
}

function ex3() {
    let pessoas = []
    let pessoasDisp = document.getElementById('pessoas')

    while (pessoas.length < 5) {
        let opcao = Number(prompt('Fila\nEscolha uma opção:\n\n1) Entrar pessoa\n2) Sair pessoa'))
        console.log(pessoas)
        switch (opcao) {
            case 1:
                let nomePessoa = prompt('Digite o nome da pessoa que entrou:')
                pessoas.push(nomePessoa)
                break
            case 2:
                if (pessoas.length > 0) {
                    let saiu = pessoas.shift(0)
                    alert(`${saiu} saiu da fila..`)
                } else {
                    alert(`A fila já está vazia.`)
                }
                break
            default:
                alert('Opção Inválida.')
        }
    }
    pessoasDisp.innerHTML = (`Pessoas na fila: ${pessoas[0]}, ${pessoas[1]}, ${pessoas[2]}, ${pessoas[3]} e ${pessoas[4]}.`)

}

function ex4() {
    let houve
    let anos = []
    let ultimoAno
    let detect = false

    let display = document.getElementById('ex4-display')

    for (i = 0; i < 10; i++) {
        let houve = prompt(`Houve alistamento no ano de ${i + 2010}?\nResponda com 'S' para SIM ou 'N' para NÃO.`)
        switch (houve) {
            case 'S':
            case 's':
                anos.push(`S`)
                break
            case 'N':
            case 'n':
                anos.push(`N`)
                break
            default:
                alert('Opção Inválida.')
                break
        }
        if (anos[i] == 'S') {
            ultimoAno = i + 2010
            detect = true
        }
        if (detect == false) {
            display.innerHTML = ('Não houveram alistamentos nos últimos 10 anos.')
        } else {
            display.innerHTML = (`O último alistamento foi no ano de ${ultimoAno}.`)
        }

    }
}

function ex5() {

    let numDoencas = Number(prompt('Digite o número de doenças a serem inseridas no sistema:'))
    let doencas = []

    let doencasBacteria = document.getElementById('ex5-bacteria')
    let doencasVirus = document.getElementById('ex5-virus')
    let doencasAmbos = document.getElementById('ex5-ambos')
    let lista = document.getElementById('ex5-doencas')

    let bacteria = []
    let virus = []
    let ambos = []

    for (i = 0; i < numDoencas; i++) {
        let nomeDoenca = prompt(`Digite o nome da ${i + 1}ª doença:`)
        doencas.push(doencas)
        let transmissao = Number(prompt('Qual o método de transmissão da doença?\n1) Viral\n2) Bacteriano\n3) Ambos'))
        switch (transmissao) {
            case 1:
                virus.push(nomeDoenca)
                doencas.splice(i, 1, nomeDoenca + ': Viral')
                break
            case 2:
                bacteria.push(nomeDoenca)
                doencas.splice(i, 1, nomeDoenca + ': Bacteriana')
                break
            case 3:
                ambos.push(nomeDoenca)
                doencas.splice(i, 1, nomeDoenca + ': Ambas')
                break
            default:
                alert('Opção Inválida.')
                break
        }

        lista.innerHTML = (`Lista de Doenças<br>${doencas}`)
        doencasVirus.innerHTML = (`Doenças Causadas por Vírus: ${virus}`)
        doencasBacteria.innerHTML = (`Doenças Causadas por Bactérias: ${bacteria}`)
        doencasAmbos.innerHTML = (`Doenças Causadas por Ambos: ${ambos}`)
    }
}

function ex6() {
    let nomesProdutos = []
    let precosProdutos = []
    let abaixoCinquenta = []
    let cond1 = document.getElementById('ex6-cond1')
    let cond2 = document.getElementById('ex6-cond2')
    let cond3 = document.getElementById('ex6-cond3')
    let media = []
    let soma = 0


    for (i = 0; i < 5; i++) {
        let nomes = prompt(`Escreva o nome do ${i + 1}º produto:`)
        let preco = Number(prompt(`Agora digite seu preço (R$):`))
        precosProdutos.push(preco)
        if (preco < 50) {
            abaixoCinquenta.push(i)
        } else if (preco >= 50 && preco < 100) {
            nomesProdutos.push(nomes)
        } else {
            media.push(preco)
        }
    }

    for (i = 0; i < media.length; i++) {
        soma += media[i]
    }
    soma /= media.length
    console.log(soma)
    console.log(media)

    cond1.innerHTML = (`<hr>Houve(ram) ${abaixoCinquenta.length} produto(s) abaixo de R$50.`)

    cond2.innerHTML = (`<hr>Lista de produtos que custaram entre R$50 e R$100:<br>${nomesProdutos}`)
    
    if(soma > 0) {
        cond3.innerHTML = (`<hr>A média do preço dos produtos cujos respectivos valores supera a marca de R$100 é: ${soma}`)
    }
    
}

function ex7() {
    let sabores = []

    for(i=-1;i>-1;i++) {
        
    }
}