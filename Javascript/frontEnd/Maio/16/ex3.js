let vetor1 = []
let vetor2 = []
let vetor3 = []

let dispVetores = document.getElementById('vetores')

for (i = 0; i < 3; i++) {
    let elemento = prompt(`Digite o ${i + 1}° elemento a ser inserido no Vetor 1:`)
    vetor1.push(elemento)
}

for (i = 0; i < 3; i++) {
    let elemento = prompt(`Digite o ${i + 1}° elemento a ser inserido no Vetor 2:`)
    vetor2.push(elemento)
}

for (i = 0; i < 3; i++) {
        vetor3.push(vetor1[i])
        vetor3.push(vetor2[i])
}

dispVetores.innerHTML = (`Vetor 1:<br>${vetor1.join('<br>')}<br><br>Vetor 2:<br>${vetor2.join('<br>')}<br><br>Vetor 3:<br>${vetor3.join('<br>')}`)

