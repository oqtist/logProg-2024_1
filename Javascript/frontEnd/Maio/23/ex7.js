let nums = []

for(i=0;nums.length<5;i++) {
    nums.push(Number(prompt(`Digite o ${nums.length + 1}º número:`)))
}



let maiorNum = nums.reduce((acumulador, itemAtual) => {
    if(itemAtual > acumulador) {
        acumulador = itemAtual
    }
    return acumulador
})

alert(`O maior número é ${maiorNum}`)