let cereja = false
let salada = []

let display = document.getElementById('saladaDisplay')

while (cereja == false) {
    let fruta = prompt('Qual fruta deseja adicionar?\nAdicione uma cereja para finalizar.')
    if (fruta == 'cereja' || fruta == 'Cereja') {
        cereja = true
    } else {
        salada.push(fruta)
    }
}

display.innerHTML = (`Sua salada de frutas está pronta:<br>${salada.join(', ')} e uma cereja.`)
