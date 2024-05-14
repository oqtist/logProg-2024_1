let vetores = []
let vetorDisplay = document.getElementById('vetorDisplay')

for (i = 0; i < 51; i++) {
    vetores.push(Math.floor(Math.random() * (201)) - 100)
}

for (i = 0; i < vetores.length; i++) {
    if (vetores[i] < 0) {
        vetores.splice(i, 1, 0)
    }
    vetorDisplay.innerHTML += (`Posição ${i}: ${vetores[i]}<br>`)

}

