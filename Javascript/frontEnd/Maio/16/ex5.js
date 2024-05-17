function seisNum() {
    let palindromo = []
    
    for(let i=0;i<6;i++) {
        let numero = Number(prompt(`Digite o ${i + 1}º número:`))
        palindromo.push(numero)
        if (i==5) {
            if(palindromo[0] == palindromo [5] && palindromo[1] == palindromo[4] && palindromo[2] == palindromo[3]) {
                alert('O número digitado é um palíndromo.')
            } else {
                alert('O número digitado NÃO é um palíndromo')
            }
        }
    }
}

function seteNum() {
    let palindromo = []
    
    for(let i=0;i<7;i++) {
        let numero = Number(prompt(`Digite o ${i + 1}º número:`))
        palindromo.push(numero)
        if (i==6) {
            if(palindromo[0] == palindromo [6] && palindromo[1] == palindromo[5] && palindromo[2] == palindromo[4]) {
                alert('O número digitado é um palíndromo.')
            } else {
                alert('O número digitado NÃO é um palíndromo')
            }
        }
    }
}

function palavra() {
    let palindromo = []
    let i = 0

    while (i != -1) {
        let letra = prompt(`Digite a ${i + 1}ª letra da palavra:<br>Digite 0 para parar.`)
        if(letra == 0) {
            i = -1
        } else {
            palindromo.push(letra)
        }
    }
    for(let c=0;c<palindromo.length;c++) {
        
    }
}