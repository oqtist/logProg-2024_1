let precos = []
let parar = false

while (parar == false) {
    let check = (prompt(`Digite o ${precos.length + 1}º preço:\nDigite 'parar' para encerrar.`)) //na realidade, os usuários podem escrever qualquer coisa para parar o loop, mas eles não precisam saber disso ;)
    if(check > 0 || check <= 0) {
        precos.push(`${check}`)
    } else {
        parar = true
    }
}

let menor50 = precos.filter((precos) => precos < 50)
alert(`Preços abaixo de R$50:\nR$${menor50.join('\nR$')}`)
