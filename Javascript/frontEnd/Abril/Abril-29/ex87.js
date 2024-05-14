let vetorPai = [], vetorMae = [], vetorFilho = []
let disp = document.getElementById('ex87-disp')
let max = 99
let min = 10

for (i = 0; i < 50; i++) {
    vetorPai.push(Math.floor(Math.random() * (max - min) ) + min);
    vetorMae.push(Math.floor(Math.random() * (max - min) ) + min);
    
    if (i % 2 == 0) {
        vetorFilho.push(vetorPai[i])
    } else {
        vetorFilho.push(vetorMae[i])
    }
    disp.innerHTML += (`<br>${vetorPai[i]} ${vetorMae[i]} ${vetorFilho[i]}`)
}



console.log(vetorPai)
console.log(vetorMae)
console.log(vetorFilho)
