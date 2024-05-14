let min = [], max = []
let randMin = 12, randMax = 35
let menor = 36, maior = 11
let mediaDiaria
let maxMediaDiaria

let maiorDisp = document.getElementById('ex81-maior')
let menorDisp = document.getElementById('ex81-menor')
let mediaDisp = document.getElementById('ex81-media')

for (i=0;i<30;i++) {
    let n = Math.floor(Math.random() * (randMax - randMin) ) + randMin
    let m = Math.floor(Math.random() * (randMax - randMin) ) + randMin

    if(m >= n) {
        max.push(m)
        min.push(n)
    } else {
        max.push(n)
        min.push(m)
    }
}

for(i=0;i<30;i++) {
    if(max[i] > maior) {
        maiorDisp.innerHTML = (`Maior temp.: ${max[i]}°C`)
    }
    if(min[i] < menor) {
        menorDisp.innerHTML = (`Menor temp.: ${min[i]}°C`)
    }
}

for(i=0;i<30;i++) {
    mediaDiaria = ((max[i] + min[i]) / 2)
    mediaDisp.innerHTML += (`Média do Dia ${i + 1}: ${mediaDiaria}°C<br>`)

}

for(i=0;i<30;i++) {
    if(mediaDiaria > )
}
